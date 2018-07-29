import { IActionPayload } from '../store/index.actions';
import { IMainStateRecord, MainStateFactory } from './main.state'
import { MainActions } from './main.actions';

export function MainReducers(
  state: IMainStateRecord = MainStateFactory(),
  action: IActionPayload<any>
): IMainStateRecord {

  switch (action.type) {

    case MainActions.RESET:
      return MainStateFactory();

    case MainActions.CREATE_MAIN:
      return state
      .set('home', action.payload.home)
      .set('away', action.payload.away)
      .set('referee', action.payload.referee)
      .set('attendance', action.payload.attendance)
      .set('events', action.payload.events)


    default:
      return state;
  }
}