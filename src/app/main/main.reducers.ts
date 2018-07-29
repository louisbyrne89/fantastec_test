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

    default:
      return state;
  }
}