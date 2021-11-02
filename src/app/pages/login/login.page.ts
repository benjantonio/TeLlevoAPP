import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  constructor(private elrouteruwu:Router, public bdlocalservice: BdLocalService, public navCtrl: NavController) {
  }

  ionViewWillEnter(){
    this.guardar()
  }

  guardar(){
    var usuario = {
      nombre: 'benja',
      contra: '123456'
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }


  //creo función para retrasar ciertas funciones.
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async ingresar(){

    this.cargando=true;
    await this.sleep(2000);
    
    var f = this.RegisterForm.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.usuario && usuario.contra == f.contrasena){
      console.log('INGRESADO');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio')
      let navigationExtras: NavigationExtras={
        state:{usuario: this.usuarioingresado}
      }
      this.elrouteruwu.navigate(['/inicio'], navigationExtras)
      this.RegisterForm.reset();
    }else{
      console.log('error');
    }

    this.cargando=false;
    //retraso la función 2Seg.
    
    
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



