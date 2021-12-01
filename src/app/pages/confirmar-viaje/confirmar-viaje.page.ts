import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { APIBdService } from 'src/app/services/apibd.service';

@Component({
  selector: 'app-confirmar-viaje',
  templateUrl: './confirmar-viaje.page.html',
  styleUrls: ['./confirmar-viaje.page.scss'],
})
export class ConfirmarViajePage implements OnInit {

  viajes:any;

  viaje:any={
    nombreConductor: "",
    edadConductor: "",
    imgConductor: "",
    emailConductor: "",
    generoConductor: "",
    fecha: "",
    hora: "",
    precio: 0,
    pasajeros: 0,
    origen: "",
    lngOrigen: 0,
    latOrigen: 0,
    regionDestino: "",
    comunaDestino: "",
    direccionDestino: "",
    lngDestino: 0,
    latDestino: 0
  }

  constructor(private elrouteruwu:Router,  
    private api:APIBdService, 
    private alertController: AlertController,
    private toastController: ToastController,
    private activeroute: ActivatedRoute) {
     }

     

  ionViewWillEnter(){
    this.almacenarViaje();
  }


  almacenarViaje(){
    this.viaje.nombreConductor= JSON.parse(localStorage.getItem('viajeActivo')).nombreConductor,
    this.viaje.edadConductor= "",
    this.viaje.imgConductor= JSON.parse(localStorage.getItem('viajeActivo')).imgConductor,
    this.viaje.emailConductor= "",
    this.viaje.generoConductor= "",
    this.viaje.fecha= "",
    this.viaje.hora= "",
    this.viaje.precio= 0,
    this.viaje.pasajeros= 0,
    this.viaje.origen= JSON.parse(localStorage.getItem('viajeActivo')).origen,
    this.viaje.lngOrigen= 0,
    this.viaje.latOrigen= 0,
    this.viaje.regionDestino= "",
    this.viaje.comunaDestino= "",
    this.viaje.direccionDestino= JSON.parse(localStorage.getItem('viajeActivo')).direccionDestino,
    this.viaje.lngDestino= 0,
    this.viaje.latDestino= 0
  
  }

  retroceder(){
    this.elrouteruwu.navigate(['/buscar-viaje']);
  }

  ngOnInit() {
  }

}
