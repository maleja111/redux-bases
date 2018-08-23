import { Cards } from '../cards';

/* NgRx */
import { Action } from '@ngrx/store';

export enum CardsActionTypes {
  ToggleCardsDetails = '[Cards] Toggle Cards Details',
  SetCurrentCard = '[Cards] Set Current Card',
  Load = '[Cards] Load',
  LoadSuccess = '[Cards] Load Current Cards',
  LoadFail = '[Cards] Load Fail',
}

// Action Creators
export class ToggleCardsDetails implements Action {
  readonly type = CardsActionTypes.ToggleCardsDetails;
  constructor(public payload: boolean) { }
}

export class SetCurrentCard implements Action {
  readonly type = CardsActionTypes.SetCurrentCard;

  constructor(public payload: Cards[]) { }
}

export class Load implements Action {
  readonly type = CardsActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CardsActionTypes.LoadSuccess;

  constructor(public payload: Cards[]) { }
}

export class LoadFail implements Action {
  readonly type = CardsActionTypes.LoadFail;

  constructor(public payload: string) { }
}


export type CardsActions = ToggleCardsDetails
  | SetCurrentCard
  | Load
  | LoadSuccess
  | LoadFail;
