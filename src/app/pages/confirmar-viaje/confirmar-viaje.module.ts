import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarViajePageRoutingModule } from './confirmar-viaje-routing.module';

import { ConfirmarViajePage } from './confirmar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarViajePageRoutingModule
  ],
  declarations: [ConfirmarViajePage]
})
export class ConfirmarViajePageModule {}
