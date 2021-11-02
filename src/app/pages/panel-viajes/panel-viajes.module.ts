import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelViajesPageRoutingModule } from './panel-viajes-routing.module';

import { PanelViajesPage } from './panel-viajes.page';

import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelViajesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PanelViajesPage]
})
export class PanelViajesPageModule {}
