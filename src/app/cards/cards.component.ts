import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import * as fromCard from './state';
import * as cardsActions from './state/cards.actions';
import { Cards } from './cards';


@Component({
    selector: 'pm-cards-component',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
    private displayDetails: boolean;
    private details: any;
    componentActive = true;
    cards$: Observable<Cards[]>;

    constructor(private store: Store<fromCard.State>) { }

    ngOnInit() {
        this.store.dispatch(new cardsActions.Load());
        this.cards$ = this.store.pipe(select(fromCard.getCards));
        // Subscribe here because it does not use an async pipe
        this.store.pipe(
            select(fromCard.getShowCardsDetail),
            takeWhile(() => this.componentActive)
        ).subscribe(
            showCardsDetails => this.displayDetails = showCardsDetails
        );
        // Subscribe here because it does not use an async pipe
        this.store.pipe(
            select(fromCard.getCards),
            takeWhile(() => this.componentActive)
        ).subscribe(
            resultDetails => this.details = resultDetails[0]
        );
    }

    ngOnDestroy() { }

    checkChanged(value: boolean): void {
        this.store.dispatch(new cardsActions.ToggleCardsDetails(value));
    }
}
