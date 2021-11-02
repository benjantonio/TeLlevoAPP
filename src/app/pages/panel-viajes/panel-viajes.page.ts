import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panel-viajes',
  templateUrl: './panel-viajes.page.html',
  styleUrls: ['./panel-viajes.page.scss'],
})
export class PanelViajesPage implements OnInit {

  constructor(private elrouteruwu:Router, public toastController: ToastController) { 
    this.elrouteruwu.navigate(['panel-viajes/crear'])
  }

  segmentChanged(event: any){
    console.log(event);
    let ruta=event.detail.value
    this.elrouteruwu.navigate(['panel-viajes/'+ruta])
  }

  ngOnInit() {
  }

}
