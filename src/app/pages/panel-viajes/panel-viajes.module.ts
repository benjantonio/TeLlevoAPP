import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelViajesPageRoutingModule } from './panel-viajes-routing.module';

import { PanelViajesPage } from './panel-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelViajesPageRoutingModule
  ],
  declarations: [PanelViajesPage]
})
export class PanelViajesPageModule {}
