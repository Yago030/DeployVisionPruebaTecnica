import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { EstrenosComponent } from './estrenos/estrenos.component';

const routes: Routes = [
  { path: '', component: CardContainerComponent }, // Ruta por defecto
  { path: 'estrenos', component: CardContainerComponent }, // Cambia esto para que use CardContainerComponent
  { path: '**', redirectTo: '' } // Redirigir a la ruta por defecto para cualquier ruta desconocida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
