import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { LoginModel } from './models/login.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})


export class LoginPage implements OnInit {
  public model:LoginModel = new LoginModel();

  RegisterForm: FormGroup;
  usuarioingresado:any;

  cargando: boolean;

  constructor(private elrouteruwu:Router, public bdlocalservice: BdLocalService) {
  }

  ionViewWillEnter(){
  }

  guardar(){
  }


  //creo función para retrasar ciertas funciones.
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async ingresar(){
    console.log(this.model);
    //retraso la función 2Seg.
    this.cargando=true;

    await this.sleep(2000);
   
    let navigationExtras: NavigationExtras={
      state:{usuario: this.usuarioingresado}
    }
    this.elrouteruwu.navigate(['/inicio'], navigationExtras)
    this.cargando=false;
    this.RegisterForm.reset();
  }

  async recuperar(){
    this.cargando=true;
    await this.sleep(1000);
    this.elrouteruwu.navigate(['/restablecer'])
    this.cargando=false;
    this.RegisterForm.reset();
  }

  async apagarbarracarga(){
    this.cargando=false;
    await this.sleep(3000);
  }

  ngOnInit() {

    this.RegisterForm = new FormGroup({
      usuario: new FormControl('',[
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(15),
      ]),
      contrasena: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }
}



