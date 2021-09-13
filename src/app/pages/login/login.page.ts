import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})

export class LoginPage implements OnInit {

  RegisterForm: FormGroup;
  
  usuarioingresado:any;
  contrasenaingresada:any;

  constructor() {
  }

  submit(){
    console.log('-USUARIO DETECTADO=', this.usuarioingresado,
    '/ CONTRASEÑA DETECTADA=', this.contrasenaingresada);
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



