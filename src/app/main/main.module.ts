import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainActions } from './main.actions';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
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
