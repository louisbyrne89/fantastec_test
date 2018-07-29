import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { WavesModule } from 'angular-bootstrap-md';

import { MainComponent } from './main.component';
import { MainActions } from './main.actions';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WavesModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    MainActions,
    HttpClient,
  ]
})
export class MainModule { }
