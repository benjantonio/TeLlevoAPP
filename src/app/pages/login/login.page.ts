import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { LoginModel } from './models/login.model';
import { APIBdService } from '../../services/apibd.service'
import { CuentasI } from '../../interfaces/cuentas';
import { Storage } from '@ionic/storage-angular';
/*
import { AppComponent } from '../../app.component'; <- error component*/
import { MenuController } from '@ionic/angular';



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

  cuenta: CuentasI[]=[]


  private _storage: Storage | null = null;
  constructor(private storage:Storage, private menu: MenuController, private api:APIBdService ,private elrouteruwu:Router, public bd: BdLocalService, public navCtrl: NavController, 
    public alertController: AlertController,
    /*, private app:AppComponent <-- error component*/) {
      this.init();

  }

  ionViewWillEnter(){
    this.agregarCuentas();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }


  agregarCuentas(){
    this.bd.guardarCuenta(1,"joc.riquelmem","123456","Jocelyn Riquelme","https://i.ibb.co/wKgFkwR/joce.png","Femenino","25","joc.riquelmem@duocuc.cl","SEDE Viña del Mar",
    "-33.0338412","-71.5321227",false);
    this.bd.guardarCuenta(2,"be.navarroa","123456","Benjamín Navarro","https://i.ibb.co/9cDw0ZW/ben.png","Masculino","24","be.navarroa@duocuc.cl","SEDE Viña del Mar",
    "-33.0338412","-71.5321227",true);
    this.bd.guardarCuenta(3,"matt.garstka","123456","Matt Garstka","https://i.ibb.co/xYFLkXP/ben.png","Masculino","32","benjaminviu@gmail.com","SEDE Valparaíso",
    "-33.0445033","-71.6148105",true);
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

      const misCuentas=await this.storage.get('cuenta');
      if(misCuentas){
        this.cuenta=misCuentas;
      }

      //Obtengo el largo de la API cuentas  
      let largocuentas:any;
      largocuentas=this.cuenta.length;
      
      //Recorro la API
      for(let i=0; i < largocuentas; i++){
        if(this.usuarioingresado==this.cuenta[i].user){
          if(this.contrasenaingresada==this.cuenta[i].pass){
            console.log('Ingreso de sesión con éxito :) - Coincide con:',i)
            localStorage.setItem('ingresado','true');

            var onlineUser = {
              id: this.cuenta[i].id,
              user: this.cuenta[i].user,
              pass: this.cuenta[i].pass,
              nombre: this.cuenta[i].nombre,
              img: this.cuenta[i].img,
              genero: this.cuenta[i].genero,
              edad: this.cuenta[i].edad,
              email: this.cuenta[i].email,
              institucion: this.cuenta[i].institucion,
              lat: this.cuenta[i].lat,
              lng: this.cuenta[i].lng,
              crearViajes: this.cuenta[i].crearViajes
            }
        
            localStorage.setItem('onlineUser', JSON.stringify(onlineUser));

            /*
            this.app.ionViewDidLeave(); <-- error component
            */
            this.menu.enable(true);


            this.elrouteruwu.navigate(['/inicio'])
            this.RegisterForm.reset();
            return;
          }else{
          }
        }else{
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



