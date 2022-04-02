import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SynopsisCardsComponent } from './series/synopsis-cards/synopsis-cards.component';

const routes: Routes = [
  {
    path:'seriesList',
    component:SeriesListComponent
  },
  {
    path:'Biography',
    component:SynopsisCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
