/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIViajesService } from 'src/app/services/apiviajes.service';
import { ToastController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  viajes:any;
  alertCtrl: any;
  alertController: any;
  

  constructor(
    private elrouteruwu:Router, 
    private api:APIViajesService,
    public Toastcontroler: ToastController,
    public AlertController: AlertController) { }
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

  async presentToast1() {
    
    const toast = await this.Toastcontroler.create({
      message: '¡Viaje confirmado!',
      duration: 2000,
      color: 'secondary',
      position: 'bottom',
    });
    toast.present();
  }
  sleep(arg0: number) {
    throw new Error('Method not implemented.');
  }

 
}
