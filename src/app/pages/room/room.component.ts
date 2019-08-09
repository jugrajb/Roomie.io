import { Component, OnInit, NgZone } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import { WebsocketService } from 'app/websocket.service';
import { LoraService } from 'app/lora.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [WebsocketService, LoraService]
})
export class RoomComponent implements OnInit {
  gaugeType = "full";
  gaugeValue = 23;
  gaugeMin = -5;
  guageMax = 40;
  gaugeLabel = "Temperature";
  gaugeAppendText = "C";
  guageSize = 250;
  gaugeThickness = 5;
  guageCap = "round"

  chartDataSource: Object;

  occupied: String = "No";

  lightDataSource: any = {
    "chart": {
      "xAxisname": "Time",
      "yAxisName": "Intensity",
      "numberPrefix": "",
      "exportenabled": "0",
      "theme": "fusion",
      "scrollToEnd": "1",
      "plotFillColor":"#55d9fa"
    },
    "categories": [{
      "category": [{
        "label":"00:00:00"
      }]
    }],
    "dataset": [{
      "renderAs": "line",
      "data": [{
        "value": "0"
      }]
    }]
  }

  soundDataSource: any = {
    "chart": {
      "xAxisname": "Time",
      "yAxisName": "Intensity",
      "numberPrefix": "",
      "exportenabled": "0",
      "theme": "fusion",
      "scrollToEnd": "1",
      "plotFillColor":"#6ff2aa"
    },
    "categories": [{
      "category": [{
        "label":"00:00:00"
      }]
    }],
    "dataset": [{
      "renderAs": "line",
      "data": [{
        "value": "0"
      }]
    }]
  }

  loraData: Object;


  constructor(private loraService: LoraService) {
    loraService.messages.subscribe(data => {
      this.loraData = data;
      this.updateVisualization();
    });
  }

  private message = {
    author: "msg",
    message: "this is a test message"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.loraService.messages.next(this.message);
    this.message.message = "";
  }

  updateVisualization() {
    this.gaugeValue = this.loraData["payload_fields"]["temp"]
    this.lightDataSource["categories"][0]["category"].push({"label": this.loraData["metadata"]["time"]})
    this.lightDataSource["dataset"][0]["data"].push({"value": this.loraData["payload_fields"]["light"].toString()})
    this.soundDataSource["categories"][0]["category"].push({"label": this.loraData["metadata"]["time"]})
    this.soundDataSource["dataset"][0]["data"].push({"value": this.loraData["payload_fields"]["sound"].toString()})
    if(!this.loraData["payload_fields"]["available"]) {
      this.occupied = "Yes"
    } else {
      this.occupied = "No"
    }
  }

  ngOnInit() { }
}