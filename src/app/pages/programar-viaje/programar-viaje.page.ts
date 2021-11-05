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

  constructor(private elrouteruwu:Router, private mapCustomService:MapCustomService, private render2:Renderer2, private toastController:ToastController) { }

  ngOnInit() : void{
    this.mapCustomService.buildMap()
    .then(({geocoder, map}) => {
      this.render2.appendChild(this.asGeoCoder.nativeElement,geocoder.onAdd(map));
      
      //método para extraer la dirección
      geocoder.on('result', ($event) => {
        const {result} = $event;
        console.log('*********OOOJOOJOJ', result.place_name)
        this.direcc=result.place_name;
      })

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
      duration: 2300,
      color: 'secondary',
      position: 'bottom',
    });
    toast.present();
  }

  async regresar(){
    localStorage.setItem('direccion', 'asdasd');
    this.elrouteruwu.navigate(['/panel-viajes'])
  }

  

}
