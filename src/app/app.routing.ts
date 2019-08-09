import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RoomListComponent } from  './pages/room-list/room-list.component'
import { RoomComponent } from './pages/room/room.component';

const routes: Routes =[
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'room-list',        component: RoomListComponent},
    { path: 'room',             component: RoomComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
