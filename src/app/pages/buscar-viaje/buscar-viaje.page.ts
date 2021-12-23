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


  constructor(
    private elrouteruwu:Router, 
    private api:APIBdService, 
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
    ) { }

  ionViewWillEnter(){
    this.getViajes();
  }
  
  async getViajes(){

    const misViajes=await this.storage.get('viaje');
      if(misViajes){
        this.viajes=misViajes;
      }

      console.log("HESTO HAY:", this.viajes)
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
    console.log("ESTE ID ES: ", id)

    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    });

    
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
