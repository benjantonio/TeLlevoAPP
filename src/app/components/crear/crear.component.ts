import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIBdService } from 'src/app/services/apibd.service';
import { MapCustomService } from 'src/app/services/map-custom.service';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;
  origenViaje= JSON.parse(localStorage.getItem('onlineUser')).institucion;
  direc:any;

  viajes:any;
  viaje:any={
    id:1,
    userConductor: JSON.parse(localStorage.getItem('onlineUser')).user,
    idConductor: JSON.parse(localStorage.getItem('onlineUser')).id,
    nombreConductor: JSON.parse(localStorage.getItem('onlineUser')).nombre,
    edadConductor: JSON.parse(localStorage.getItem('onlineUser')).edad,
    imgConductor: JSON.parse(localStorage.getItem('onlineUser')).img,
    emailConductor: JSON.parse(localStorage.getItem('onlineUser')).email,
    generoConductor: JSON.parse(localStorage.getItem('onlineUser')).genero,
    fecha: "",/**/
    hora: "",/**/
    precio: "",/**/
    pasajeros: "",/**/
    origen: JSON.parse(localStorage.getItem('onlineUser')).institucion,
    lngOrigen: JSON.parse(localStorage.getItem('onlineUser')).lng,
    latOrigen: JSON.parse(localStorage.getItem('onlineUser')).lat,
    regionDestino:"",
    comunaDestino:"",
    direccionDestino: "",/**/
    lngDestino: "",/**/
    latDestino: ""/**/
  };

  constructor(
    private elrouteruwu:Router, 
    public toastController: ToastController, 
    private api:APIBdService, 
    private activeroute: ActivatedRoute, 
    public map:MapCustomService,
    private bd:BdLocalService,
    private storage: Storage
    ) { 
  }

  ionViewWillEnter(){
    this.getViajes();
  }

probar(){
  console.log("La hora es: ",this.viaje.hora.substring(11,16))
}

getViajes(){
  this.api.getViajes().subscribe((data)=>{
    this.viajes=data;
  })

}

async guardarViaje(){

  const misViajes=await this.storage.get('viaje');
  let viajes = misViajes;
  viajes.reverse();
  let idTemporal=1;
  
  viajes.forEach(setFunction);
  function setFunction(datoViaje,id, callingSet){
    if(idTemporal===datoViaje.id ){
      console.log("El ID ",idTemporal," ya existe.");
      idTemporal=idTemporal+1;
    }else{
      console.log("El ID",idTemporal," no existe. Puede ocuparse. ");
    }
  }

  console.log("La ID Temporal quedó en: ",idTemporal)
  this.viaje.comunaDestino=this.map.devolverComuna();
  this.viaje.regionDestino=this.map.devolverRegion();
  this.viaje.direccionDestino=this.map.devolverDireccion();
  this.viaje.lngDestino=this.map.devolverLng();
  this.viaje.latDestino=this.map.devolverLat();
  this.viaje.hora=this.viaje.hora.substring(11,16);
  
  this.bd.guardarViaje(
    idTemporal,
    this.viaje.userConductor,
    this.viaje.idConductor,
    this.viaje.nombreConductor,
    this.viaje.edadConductor,
    this.viaje.imgConductor,
    this.viaje.emailConductor,
    this.viaje.generoConductor,
    this.viaje.fecha,
    this.viaje.hora,
    this.viaje.precio,
    this.viaje.pasajeros,
    this.viaje.origen,
    this.viaje.lngOrigen,
    this.viaje.latOrigen,
    this.viaje.regionDestino,
    this.viaje.comunaDestino,
    this.viaje.direccionDestino,
    this.viaje.lngDestino,
    this.viaje.latDestino
  );
  this.RegisterForm.reset();
    this.elrouteruwu.navigate(['/inicio']);
    this.apagarboton=false;
  
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
        Validators.max(2000)
      ]),
    });
  }

  

}


