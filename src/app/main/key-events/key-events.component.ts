import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { Subject } from 'rxjs';
import * as Immutable from 'immutable';

import { IEventStateRecord } from '../main.state';
import { MainActions } from '../main.actions';


interface IEvents {
  type: string;
  player: string;
  minute: string;
} 

@Component({
  selector: 'app-key-events',
  templateUrl: './key-events.component.html',
  styleUrls: ['./key-events.component.scss']
})
export class KeyEventsComponent implements OnInit {
  ngUnsubscribe = new Subject()
  @select(['main', 'events']) eventsObs: Observable<Immutable.List<IEventStateRecord>>;
  keyEvents: IEventStateRecord[];
  eventTypes: Array<string> = ["goal", "half time", "yellow"]

  constructor() { }

  ngOnInit() {
    this.eventsObs
    .subscribe((events: Immutable.List<IEventStateRecord>) => {
      this.keyEvents = [];
      events.map((event: IEventStateRecord) => {
        if (this.eventTypes.indexOf(event.type) !== -1) {
          this.keyEvents.push(event);
        }
      })
    })
  }

  scroll(id: string): void {
    const el = document.getElementById("scroll" + id);
    el.scrollIntoView();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
