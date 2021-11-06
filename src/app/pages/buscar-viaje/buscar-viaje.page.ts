/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIViajesService } from 'src/app/services/apiviajes.service';



@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  viajes: any;
  


  constructor(
    private elrouteruwu:Router, 
    private api:APIViajesService, 
    private toastController: ToastController) { }
  ionViewWillEnter(){
    this.getViajes();
  }


  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    })
  }

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
    
  }

  ngOnInit() {
  }

  async presentToast(){
   const toast = await this.toastController.create({
     message: 'Viaje creado exitosamente',
     duration: 500,
     position: 'middle'
   });
   toast.present()
  }

}
