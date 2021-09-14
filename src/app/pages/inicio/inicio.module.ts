import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
//G-MAPS
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    GooglePlaceModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
