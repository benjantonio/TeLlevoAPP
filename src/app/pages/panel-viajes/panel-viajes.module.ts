import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelViajesPageRoutingModule } from './panel-viajes-routing.module';

import { PanelViajesPage } from './panel-viajes.page';

import { ReactiveFormsModule} from '@angular/forms';

import { CrearComponent } from 'src/app/components/crear/crear.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelViajesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PanelViajesPage, CrearComponent], 
})
export class PanelViajesPageModule {}
