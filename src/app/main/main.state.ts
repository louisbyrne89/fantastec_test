import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';
import * as Immutable from 'immutable';


interface IEventState {
    minute: string;
    type: string;
    text: string;
    player: string;
    id: string;
}

const Events: IEventState = {
    minute: null,
    type: null,
    text: null,
    player: null,
    id: null,
};

export const EventStateFactory = makeTypedFactory<IEventState, IEventStateRecord>(Events);

export interface IEventStateRecord extends TypedRecord<IEventStateRecord>, IEventState { };


interface IMainState {
    home: string;
    away: string;
    attendance: string;
    referee: string;
    events: Immutable.List<IEventStateRecord>;
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
