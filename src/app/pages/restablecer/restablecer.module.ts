import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



import { IonicModule } from '@ionic/angular';

import { RestablecerPageRoutingModule } from './restablecer-routing.module';

import { RestablecerPage } from './restablecer.page';
import { ReactiveFormsModule} from '@angular/forms'; //<- este solucionó el error de formControlName

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [RestablecerPage]
})
export class RestablecerPageModule {}
