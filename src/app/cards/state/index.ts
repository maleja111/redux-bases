import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromCards from './cards.reducer';

// Extends the app state to include the card feature.
// This is required because Cards are lazy loaded.
// So the reference to Cards cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
    cards: fromCards.CardsState;
}

// Selector functions
const getCardsFeatureState = createFeatureSelector<fromCards.CardsState>('cards');

export const getShowCardsDetail = createSelector(
    getCardsFeatureState,
    state => state.showCardsDetails
);

export const getCurrentCards = createSelector(
    getCardsFeatureState,
    state => state.currentCard
);

export const getCards = createSelector(
    getCardsFeatureState,
    state => state.currentCard
);
