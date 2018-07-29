import { TestBed } from '@angular/core/testing';

import { rootReducer } from '@app/store/index.reducers';
import { AppStateFactory } from '@app/store/index.state';

describe('MainReducers', () => {
  const state1 = AppStateFactory();
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
});
