import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

import { IAppStateRecord } from '../store/index.state';

@Injectable()
export class MainActions {
  static RESET = 'main/RESET';
  constructor(
    private store: NgRedux<IAppStateRecord>,
  ) { }
}
