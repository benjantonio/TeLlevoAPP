import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { APIViajesService } from 'src/app/services/apiviajes.service';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  viajes:any;

  constructor(
    private elrouteruwu:Router, 
    private api:APIViajesService, 
    private alertController: AlertController,
    private toastController: ToastController
    ) { }

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

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async aceptarViaje() {
    let alert = await this.alertController.create({
      header: "Tomar Viaje",
      message: "¿Quieres tomar este viaje?",
      buttons: [
        {
          text: "Aceptar",
          handler: async () =>{
            console.log("Tomar Viaje")
            await this.sleep(400);
            this.elrouteruwu.navigate(['/inicio'])

            await this.sleep(600);
            const toast = await this.toastController.create({
              message: '¡Viaje Aceptado! ｡◕‿◕｡',
              duration: 2300,
              color: 'success',
              position: 'bottom',
            });
            toast.present();
          }
      },
      {
        text: "Cancelar",
          handler: () =>{
            console.log("Cancelar")
          }
      }
    ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  


  ngOnInit() {
  }

}
