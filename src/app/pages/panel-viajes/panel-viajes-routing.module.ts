import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from 'src/app/components/crear/crear.component';
import { MisViajesComponent } from 'src/app/components/mis-viajes/mis-viajes.component';

import { PanelViajesPage } from './panel-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: PanelViajesPage,
    children:[
      {
        path: "crear",
        component: CrearComponent 
      },
      {
        path: "misviajes",
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
