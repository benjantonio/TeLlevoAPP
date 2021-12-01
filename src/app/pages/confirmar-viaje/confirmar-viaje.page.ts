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
  idViaje:any;

  constructor(private elrouteruwu:Router, 
    private api:APIBdService, 
    private alertController: AlertController,
    private toastController: ToastController,
    private activeroute: ActivatedRoute) {
      this.activeroute.queryParams.subscribe(params=> {
        if(this.elrouteruwu.getCurrentNavigation().extras.state){
          this.idViaje= this.elrouteruwu.getCurrentNavigation().extras.state.usuario;
        }else{
          this.idViaje= "0 no se pudo rescatar el ID";
        }
      })
     }

  ionViewWillEnter(){
    /*this.getViajes();*/
  }
  /*
  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    });
  }*/

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
  }

  ngOnInit() {
  }

}
