import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CardsService } from './cards.service';
import { Cards } from '../cards';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as cardsActions from './cards.actions';

@Injectable()
export class CardsEffects {

  constructor(private cardsService: CardsService,
    private actions$: Actions) { }

  @Effect()
  loadCards$: Observable<Action> = this.actions$.pipe(
    ofType(cardsActions.CardsActionTypes.Load),
    mergeMap(action =>
      this.cardsService.getCards().pipe(
        map(cards => (new cardsActions.LoadSuccess(cards))),
        catchError(err => of(new cardsActions.LoadFail(err)))
      )
    )
  );
}
