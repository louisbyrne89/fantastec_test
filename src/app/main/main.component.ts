import { Component, OnInit } from '@angular/core';
import { MainActions } from './main.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private mainActions: MainActions
  ) { }

  ngOnInit() {
    this.mainActions.initialiseDataStream();
  }

}
