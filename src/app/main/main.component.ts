import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { IEventStateRecord } from './main.state';

import { MainActions } from './main.actions';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @select(['main', 'home']) homeObs: Observable<string>;
  @select(['main', 'away']) awayObs: Observable<string>;
  @select(['main', 'referee']) refereeObs: Observable<string>;
  @select(['main', 'attendance']) attendanceObs: Observable<string>;
  @select(['main', 'events']) eventsObs: Observable<Immutable.List<IEventStateRecord>>;

  constructor(
    private mainActions: MainActions
  ) { }

  ngOnInit() {
    this.mainActions.initialiseDataStream();
  }

}
