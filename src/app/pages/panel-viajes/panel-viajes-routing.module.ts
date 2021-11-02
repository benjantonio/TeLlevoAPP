import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearViajeComponent } from 'src/app/components/crear-viaje/crear-viaje.component';
import { MisViajesComponent } from 'src/app/components/mis-viajes/mis-viajes.component';

import { PanelViajesPage } from './panel-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: PanelViajesPage,
    children: [
      {
        path: "crear",
        component: CrearViajeComponent
      },
      {
        path: "listar",
        component: MisViajesComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelViajesPageRoutingModule {}
