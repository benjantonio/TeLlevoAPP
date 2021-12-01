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
    imgConductor: JSON.parse(localStorage.getItem('viajeActivo')).imgConductor,
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
  }


  almacenarViaje(){
    
    
  
  }

  retroceder(){
    this.elrouteruwu.navigate(['/buscar-viaje']);
  }

  ngOnInit() {
  }

}
