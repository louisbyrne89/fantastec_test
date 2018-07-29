import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { WavesModule } from 'angular-bootstrap-md';

import { MainComponent } from './main.component';
import { MainActions } from './main.actions';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WavesModule
  ],
  declarations: [
    MainComponent,
    ListItemComponent
  ],
  providers: [
    MainActions,
    HttpClient,
  ]
})
export class MainModule { }
