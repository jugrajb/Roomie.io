import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';
import { LandingComponent } from './landing/landing.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component' 

import { NgxGaugeModule } from 'ngx-gauge'

import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
    FusionCharts,
    Charts,
    FusionTheme
)

@NgModule({
    imports: [
        BrowserModule,
        FusionChartsModule,
        CommonModule,
        FormsModule,
        NgbModule,
        NgxGaugeModule
    ],
    declarations: [
        LandingComponent,
        RoomComponent,
        RoomListComponent
    ]
})
export class PagesModule { }
