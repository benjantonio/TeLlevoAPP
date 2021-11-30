import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribirsePageRoutingModule } from './inscribirse-routing.module';

import { InscribirsePage } from './inscribirse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscribirsePageRoutingModule
  ],
  declarations: [InscribirsePage]
})
export class InscribirsePageModule {}
