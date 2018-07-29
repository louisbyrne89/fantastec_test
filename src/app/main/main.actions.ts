import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import * as Immutable from 'immutable';

import { IAppStateRecord } from '../store/index.state';
import {
  IEventStateRecord,
  EventStateFactory,
  IMainStateRecord,
  MainStateFactory,
} from './main.state';

@Injectable()
export class MainActions {
  static RESET = 'main/RESET';
  static CREATE_MAIN = 'main/CREATE_MAIN';

  constructor(
    private store: NgRedux<IAppStateRecord>,
    private http: HttpClient
  ) { }

  public initialiseDataStream(): void {
    this.http.get('./assets/data.json')
    .subscribe((response: Response): void => 
      this.addDataToStore(response)
    );

  }

  private addDataToStore(data: Response): void {
    const events = Immutable.List(data["events"].map(
      (event: {[key: string]: string}): IEventStateRecord => {
        return EventStateFactory({
          minute: event["minute"],
          type: event["type"],
          text: event["text"],
          player: event["player"],
        });
      })
    );
    this.store.dispatch({
      type:MainActions.CREATE_MAIN,
      payload: {
        home: data["Home"],
        away: data["Away"],
        referee: data["Referee"],
        attendance: data["Attendance"],
        events: events
      } 
    });

  }

}
