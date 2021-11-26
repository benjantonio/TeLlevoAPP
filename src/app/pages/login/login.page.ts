import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { LoginModel } from './models/login.model';
import { APIBdService } from '../../services/apibd.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})


export class LoginPage implements OnInit {
  public model:LoginModel = new LoginModel();

  RegisterForm: FormGroup;
  usuarioingresado:any;
  contrasenaingresada:any;
  cargando: boolean;

  rescate: any;

  cuentas:any;
  constructor( private api:APIBdService ,private elrouteruwu:Router, public bdlocalservice: BdLocalService, public navCtrl: NavController, public alertController: AlertController) {
  }

  ionViewWillEnter(){
    this.guardar()
  }

  guardar(){
    
    var usuario = {
      nombre: 'joc.riquelmem',
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

    //Simulo estado Cargando...
    this.cargando=true;
    await this.sleep(2000);

    //Obtengo las cuentas de la API
    this.api.getCuentas().subscribe(async (data)=>{
      this.cuentas=data;

      //Obtengo el largo de la API cuentas  
      let largocuentas:any;
      largocuentas=this.cuentas.length;
      
      //Recorro la API
      for(let i=0; i < largocuentas; i++){
        if(this.usuarioingresado==this.cuentas[i].user){
          if(this.contrasenaingresada==this.cuentas[i].pass){
            console.log('Ingreso de sesión con éxito :) - Coincide con:',i)
            localStorage.setItem('ingresado','true');
            this.navCtrl.navigateRoot('inicio')
            let navigationExtras: NavigationExtras={
            state:{usuario: this.usuarioingresado}
            }
            this.elrouteruwu.navigate(['/inicio'], navigationExtras)
            this.RegisterForm.reset();
            return;
          }else{
            console.log('Nombre User coincide con:',i)
          }
        }else{
          console.log('No coincide con el:',i)
        }
      }

      //Mensaje de error
      const alert = await this.alertController.create({ 
        header: 'Error',
        message: 'El usuario o la contraseña es incorrecta.',
        buttons: ['OK']
      });
      await alert.present();
      console.log('error');

    });

    //Apago la barra cargando 
    this.cargando=false;
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



