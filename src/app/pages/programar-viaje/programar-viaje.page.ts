import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MapCustomService } from 'src/app/services/map-custom.service';

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})


export class ProgramarViajePage implements OnInit {
  @ViewChild('asGeoCoder') asGeoCoder:ElementRef;

  direcc:any;
  apagarboton:true;

  constructor(
    private elrouteruwu:Router, 
    private mapCustomService:MapCustomService, 
    private render2:Renderer2, 
    private toastController:ToastController
    ) { }

  ngOnInit() : void{
    this.mapCustomService.buildMap()
    .then(({geocoder, map}) => {
      this.render2.appendChild(this.asGeoCoder.nativeElement,geocoder.onAdd(map));
      
      //método para extraer la dirección
      

      console.log('**** todo bien ****')
    })
    .catch((err) => {
      console.log('**** ERROR ****', err)
    })

    
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async presentToast() {
    
    await this.sleep(600);
    const toast = await this.toastController.create({
      message: '¡Destino Guardado!',
      duration: 3000,
      color: 'secondary',
      position: 'bottom',
    });
    toast.present();
  }


  prueba(){
    
  }

  async regresar(){

    if (!this.mapCustomService.devolverDireccion()) {
      console.log('es null')
      this.toast2();
    } else {
      console.log('TIENE DATOS')
      this.elrouteruwu.navigate(['/panel-viajes'])
      this.presentToast();
    }
    //
    //this.mapCustomService.blockMap(true);
  }

  async atras(){
    //this.mapCustomService.blockMap(false);
    //this.elrouteruwu.navigate(['/panel-viajes'])
  }

  async toast2() {
    const toast2 = await this.toastController.create({
      message: 'Por favor, ingresa una dirección.',
      duration: 3500,
      color: 'danger',
      position: 'bottom',
    });
    toast2.present();
  }
  
  
  

}
