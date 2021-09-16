import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramarViajePageRoutingModule } from './programar-viaje-routing.module';

import { ProgramarViajePage } from './programar-viaje.page';

import { ReactiveFormsModule} from '@angular/forms'; //<- este solucionó el error de formControlName

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramarViajePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProgramarViajePage]
})
export class ProgramarViajePageModule {}
