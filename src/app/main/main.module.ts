import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { WavesModule, IconsModule } from 'angular-bootstrap-md';

import { MainComponent } from './main.component';
import { MainActions } from './main.actions';
import { ListItemComponent } from './list-item/list-item.component';
import { KeyEventsComponent } from './key-events/key-events.component';
import { IconViewComponent } from './icon-view/icon-view.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WavesModule,
    IconsModule
  ],
  declarations: [
    MainComponent,
    ListItemComponent,
    KeyEventsComponent,
    IconViewComponent
  ],
  providers: [
    MainActions,
    HttpClient,
  ]
})
export class MainModule { }
