import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component'; // Ruta del componente Home
import { SeriesComponent } from './series/series.component'; // Ruta del componente Series

const routes: Routes = [
  { path: '', component: CardContainerComponent },
  { path: 'series', component: SeriesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
