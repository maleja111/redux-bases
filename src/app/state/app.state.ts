import { CardsState } from '../cards/state/cards.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  cards: CardsState;
}
