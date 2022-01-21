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
   
  }

probar(){
  console.log("La hora es: ",this.viaje.hora.substring(11,16))
}



async guardarViaje(){

  const misViajes=await this.storage.get('viaje');
  let viajes = misViajes;
  let idTemporal=1;
  let idFinal
  let conteo = 0;
  let existe;
  let salir=false;
  
  console.log("viajes es:",viajes)
  
  if(viajes){
    viajes.reverse();

    viajes.forEach(busquedageneral);
    function busquedageneral(datoViaje,id, callingSet){ 
      if(viajes.length==1){
        if (datoViaje.id===1){
          idTemporal=2;
        }else{
          idTemporal=1;
        }
      }else{
        if (salir==false){
          console.log("----Recorrido ",idTemporal,"-----")
          existe=false;
          console.log("EXISTE HA CAMBIADO A: ", existe)
      
          viajes.forEach(busquedaunidad);
          function busquedaunidad(datoViaje,id, callingSet){
            conteo=conteo+1;
            console.log(conteo,". ID: ",idTemporal ,"ID Extraido: ",datoViaje.id)
            if(idTemporal===datoViaje.id ){ 
              existe=true;
              }
            console.log("existe es: ",existe)
            }
          }
    
        conteo=0;
        if (existe == true){
          idTemporal=idTemporal+1;
        }else{
          console.log("HE ENTRADO EN EL ELSE FINAL.. <<<<<<<<<<<<<<<----")
          idTemporal=idTemporal;
          salir=true;
        }
    }
  }

  }

  

  console.log("La ID Final quedó en: ",idTemporal)
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


