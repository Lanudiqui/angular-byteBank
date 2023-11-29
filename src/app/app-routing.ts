import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { NuevaTransfereciaComponent } from './NuevaTranferencia/nueva-transferencia.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'estado',
  pathMatch: 'full'
},{
  path: 'estado',
  component: EstadoCuentaComponent,
},{
  path: ':nueva-trasnferencia',
  component: NuevaTransfereciaComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

