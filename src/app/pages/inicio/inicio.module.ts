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
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from '../../app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyAOdTKxNvF_wXRAOe-Ny5qta0NiKXS29-8',
      libraries : ['places']
    }),
    MatCardModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
