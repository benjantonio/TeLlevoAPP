import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})

export class LoginPage implements OnInit {

  RegisterForm: FormGroup;
  usuarioingresado:any;

  cargando: boolean;

  constructor(private elrouteruwu:Router) {
  }

  //creo función para retrasar ciertas funciones.
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async ingresar(){
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



