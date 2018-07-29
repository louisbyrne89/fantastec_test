import { Component, OnInit } from '@angular/core';
import { MainActions } from './main.actions';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @select(['main', 'home']) homeObs: Observable<string>;
  @select(['main', 'away']) awayObs: Observable<string>;
  @select(['main', 'referee']) refereeObs: Observable<string>;
  @select(['main', 'attendance']) attendanceObs: Observable<string>;
  @select(['main', 'events']) eventsObs: Observable<string>;

  constructor(
    private mainActions: MainActions
  ) { }

  ngOnInit() {
    this.mainActions.initialiseDataStream();
  }

}
