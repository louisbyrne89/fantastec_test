import { combineReducers } from 'redux-immutable';
import { IAppStateRecord } from './index.state';
import { MainReducers } from '../main/main.reducers';


export function reduceReducers(...reducers: any[]) {
  return (previousState: any, currentState: any) =>
    reducers.reduce(
      (p, r) => r(p, currentState),
      previousState
    );
}

export const rootReducer = reduceReducers(
  combineReducers<IAppStateRecord>({
    main: MainReducers
  }),
);
