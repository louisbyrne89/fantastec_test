import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';


interface IMainState {
}

const Main: IMainState = {
};

export const MainStateFactory = makeTypedFactory<IMainState, IMainStateRecord>(Main);

export interface IMainStateRecord extends TypedRecord<IMainStateRecord>, IMainState { };
