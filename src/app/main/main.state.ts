import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';
import * as Immutable from 'immutable';


interface IEventsState {
    minute: number;
    type: string;
    text: string;
    player: string;
}

const Events: IEventsState = {
    minute: null,
    type: null,
    text: null,
    player: null,
};

export const EventsStateFactory = makeTypedFactory<IEventsState, IEventsStateRecord>(Events);

export interface IEventsStateRecord extends TypedRecord<IEventsStateRecord>, IEventsState { };


interface IMainState {
    home: string;
    away: string;
    attendance: string;
    referee: string;
    events: Immutable.List<IEventsStateRecord>;
}

const Main: IMainState = {
    home: null,
    away: null,
    attendance: null,
    referee: null,
    events: Immutable.List(),
};

export const MainStateFactory = makeTypedFactory<IMainState, IMainStateRecord>(Main);

export interface IMainStateRecord extends TypedRecord<IMainStateRecord>, IMainState { };
