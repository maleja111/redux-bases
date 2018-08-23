import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CardsComponent } from './cards.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/cards.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './state/cards.effects';

const cardsRoutes: Routes = [
  { path: '', component: CardsComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(cardsRoutes),
    StoreModule.forFeature('cards', reducer),
    EffectsModule.forFeature(
      [CardsEffects]
    ),
  ],
  declarations: [
    CardsComponent
  ]
})
export class CardsModule { }
