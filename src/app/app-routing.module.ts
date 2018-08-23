import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';

const appRoutes: Routes = [
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
