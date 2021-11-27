import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIBdService } from 'src/app/services/apibd.service';
import { MapCustomService } from 'src/app/services/map-custom.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;
  direc:any;

  viajes:any;
  viaje:any={
    id:null,
    userConductor: JSON.parse(localStorage.getItem('onlineUser')).user,
    idConductor: JSON.parse(localStorage.getItem('onlineUser')).id,
    nombreConductor: JSON.parse(localStorage.getItem('onlineUser')).nombre,
    edadConductor: JSON.parse(localStorage.getItem('onlineUser')).edad,
    imgConductor: JSON.parse(localStorage.getItem('onlineUser')).img,
    emailConductor: JSON.parse(localStorage.getItem('onlineUser')).email,
    generoConductor: JSON.parse(localStorage.getItem('onlineUser')).genero,
    titulo: "",/**/
    fecha: "",/**/
    hora: "",/**/
    precio: "",/**/
    pasajeros: "",/**/
    origen: JSON.parse(localStorage.getItem('onlineUser')).institucion,
    lngOrigen: JSON.parse(localStorage.getItem('onlineUser')).lng,
    latOrigen: JSON.parse(localStorage.getItem('onlineUser')).lat,
    direccionDestino: "",/**/
    lngDestino: "",/**/
    latDestino: ""/**/
  };

  constructor(
    private elrouteruwu:Router, 
    public toastController: ToastController, 
    private api:APIBdService, 
    private activeroute: ActivatedRoute, 
    public map:MapCustomService
    ) { 
  }

  ionViewWillEnter(){
    this.getViajes();
  }


getViajes(){
  this.api.getViajes().subscribe((data)=>{
    this.viajes=data;

  })
}

guardarViaje(){
  this.viaje.direccionDestino=this.map.devolverDireccion();
  this.viaje.lngDestino=this.map.devolverLng();
  this.viaje.latDestino=this.map.devolverLat();
  this.api.createViaje(this.viaje).subscribe( ()=>{
    console.log('viaje creado :d');
    console.log( ' ingresada a api: ',this.viaje.direccionDestino);
    this.RegisterForm.reset();
    this.elrouteruwu.navigate(['/inicio']);
    this.apagarboton=false;
  })
}

    //creo función para retrasar ciertas funciones.
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    probando(){
      console.log("asasdds PRUEBA PRUEBA")
    }

    retroceder(){
      this.elrouteruwu.navigate(['/inicio']);
      this.apagarboton=false;
      this.cargando=false;
    }
    
  async abrirmapa(){
    this.cargando=true;
    await this.sleep(1000);
    this.elrouteruwu.navigate(['/programar-viaje']);
    this.apagarboton=true;
    /* Revisar apagarboton */
    this.cargando=false;
  }

 
  async crearviaje(){

    this.cargando=true;
    await this.sleep(3000);
    this.elrouteruwu.navigate(['/inicio']);
    this.apagarboton=false;
    this.cargando=false;
    
  }

     // TOAST //
     async presentToast() {
      
      await this.sleep(3700);
      const toast = await this.toastController.create({
        message: '¡Tu viaje ha sido creado con éxito!.',
        duration: 3500,
        color: 'success',
        position: 'bottom',
      });
      toast.present();
    }

   

  ngOnInit() {
    


    this.RegisterForm = new FormGroup({
      titulo: new FormControl('',[
        Validators.required, 
      ]),
      fecha: new FormControl('',[
        Validators.required,
      ]),
      hora: new FormControl('',[
        Validators.required, 
      ]),
      capacidad: new FormControl('',[
        Validators.required,
      ]),
      precio: new FormControl('',[
        Validators.required,
      ]),
    });
  }

  

}


