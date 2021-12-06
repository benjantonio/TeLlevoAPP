import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { ReactiveFormsModule} from '@angular/forms'; //<- este solucionó el error de formControlName

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
