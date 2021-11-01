import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelViajesPage } from './panel-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: PanelViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelViajesPageRoutingModule {}
