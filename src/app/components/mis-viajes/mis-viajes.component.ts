import { Component, OnInit } from '@angular/core';
import { APIBdService } from 'src/app/services/apibd.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.scss'],
})
export class MisViajesComponent implements OnInit {

  viajes:any;
  viajesDeCuenta= [];
  idViaje:any;

  constructor(private api:APIBdService, private elrouteruwu:Router,private alertController: AlertController,
    private toastController: ToastController) { }

  ionViewWillEnter(){
    this.getViajes();
  }

  getViajes(){
    this.viajesDeCuenta= [];
    this.api.getViajes().subscribe((data)=>{
      console.log("VIAJES NORMALES: ", data)
      
      let largoviajes:any;
      largoviajes=data.length;
 
      console.log("LARGO VIAJES NORMALES: ",largoviajes)

      for(let i=0; i < largoviajes; i++){
        if(data[i].idConductor == JSON.parse(localStorage.getItem('onlineUser')).id){
          this.viajesDeCuenta.push(data[i])
        }
      }

      console.log("idCuenta Iniciada: ", JSON.parse(localStorage.getItem('onlineUser')).id);
      console.log("VIAJES Cuenta!: ", this.viajesDeCuenta)
    });
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async obtenerIdViaje(id){
    this.idViaje=id;
    console.log("ESTE VIAJE TIENE ID: ",this.idViaje)


    let alert = await this.alertController.create({
      header: "Eliminar Viaje",
      message: "¿Deseas eliminar este viaje?",
      buttons: [
        {
          text: "Eliminar",
          handler: async () =>{
            this.api.deleteViaje(this.idViaje).subscribe(res=>{
            });
            await this.sleep(500);
            
            console.log("viaje supuestamente eliminado")
            this.elrouteruwu.navigate(['/inicio'])

            await this.sleep(900);
            const toast = await this.toastController.create({
              message: '                   Viaje eliminado ✔',
              duration: 4300,
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

  revisar(){
  }

  ngOnInit() {}

}
