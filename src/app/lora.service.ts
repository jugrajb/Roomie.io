import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "./websocket.service";

const LORA_SOCKET = "wss://spark-heroku-lora-server.herokuapp.com/echo";

export interface Message {
  author: string;
  message: string;
}

@Injectable()
export class LoraService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService.connect(LORA_SOCKET).map(
      (response: MessageEvent): Message => {
        return JSON.parse(response.data);
      }
    );
  }
}