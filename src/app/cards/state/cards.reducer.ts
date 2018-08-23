import { Cards } from '../cards';
import { CardsActions, CardsActionTypes } from './cards.actions';

// State for this feature (card)
export interface CardsState {
  showCardsDetails: boolean;
  currentCard: Cards[];
}

const initialState: CardsState = {
  showCardsDetails: true,
  currentCard: []
};

export function reducer(state = initialState, action: CardsActions): CardsState {

  switch (action.type) {
    case CardsActionTypes.ToggleCardsDetails:
      return {
        ...state,
        showCardsDetails: action.payload
      };

    case CardsActionTypes.LoadSuccess:
      return {
        ...state,
        currentCard: action.payload
      };

    default:
      return state;
  }
}
