import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { APIBdService } from 'src/app/services/apibd.service';
import { ViajesI } from 'src/app/interfaces/viajes';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  viajes:ViajesI[]=[]
  cuentas:any;
  idViaje:any;
  uwu:any;
  value: any; key: ""; iterationNumber: 1


  constructor(
    private elrouteruwu:Router, 
    private api:APIBdService, 
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
    ) { }

  ionViewWillEnter(){
    this.getViajes();
    this.test();
  }

  async test(){
    const misViajes=await this.storage.get('viaje');
    console.log(misViajes)
    let viajes = misViajes;
    let largoviajes=this.viajes.length;
    let idTemporal=0;
    
    let repetir=true;

    let repeticion=0;
    
    for(let i=0; i < largoviajes; i++){
      let ocupado=false;
      if(repetir){
        repeticion = repeticion+1
        console.log("repeticion: ",repeticion)
        idTemporal=idTemporal+1;
        viajes.forEach(setFunction);
        function setFunction(datoViaje,id, callingSet){
          console.log("el idTemporal", idTemporal," y el viaje ",datoViaje.id)
        if(idTemporal===datoViaje.id && ocupado){
          ocupado=true;
          
          }
        }
        if(!ocupado){
          repetir=false;
          console.log("ya no se repite")
        }
      }
    }

  }


  async getViajes(){
    const misViajes=await this.storage.get('viaje');
      if(misViajes){
        this.viajes=misViajes;
      }
      
  }

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  obtenerIdViaje(id){
    this.idViaje=id;
    this.idViaje=this.idViaje-1;
    console.log("ID VIAJE: ", id)

    
    let largoviajes:any;
      largoviajes=this.viajes.length;

    for(let i=0; i < largoviajes; i++){
      if(id==this.viajes[i].id){
        localStorage.setItem('viajeActivo',JSON.stringify(this.viajes[i]));
          this.elrouteruwu.navigate(['/confirmar-viaje']); 
          return;
      }else{
      }
    }
  }

  ngOnInit() {
  }

}
