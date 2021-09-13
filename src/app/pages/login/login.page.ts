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

  constructor(private elrouteruwu:Router) {
  }

  ingresar(){
    let navigationExtras: NavigationExtras={
      state:{usuario: this.usuarioingresado}
    }
    this.elrouteruwu.navigate(['/inicio'], navigationExtras)
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



