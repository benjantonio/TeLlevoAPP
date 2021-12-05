import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { APIBdService } from 'src/app/services/apibd.service';
import { send } from 'emailjs-com'

@Component({
  selector: 'app-confirmar-viaje',
  templateUrl: './confirmar-viaje.page.html',
  styleUrls: ['./confirmar-viaje.page.scss'],
})
export class ConfirmarViajePage implements OnInit {

  viajes:any;

  viaje:any={
    nombreConductor: "",
    edadConductor: "",
    imgConductor: "",
    emailConductor: "",
    generoConductor: "",
    fecha: "",
    hora: "",
    precio: 0,
    pasajeros: 0,
    origen: "",
    lngOrigen: 0,
    latOrigen: 0,
    regionDestino: "",
    comunaDestino: "",
    direccionDestino: "",
    lngDestino: 0,
    latDestino: 0
  }

  constructor(private elrouteruwu:Router,  
    private api:APIBdService, 
    private alertController: AlertController,
    private toastController: ToastController,
    private activeroute: ActivatedRoute) {
     }

  ionViewWillEnter(){
    this.almacenarViaje();
  }

  almacenarViaje(){
    this.viaje.nombreConductor= JSON.parse(localStorage.getItem('viajeActivo')).nombreConductor,
    this.viaje.edadConductor= JSON.parse(localStorage.getItem('viajeActivo')).edadConductor,
    this.viaje.imgConductor= JSON.parse(localStorage.getItem('viajeActivo')).imgConductor,
    this.viaje.emailConductor= JSON.parse(localStorage.getItem('viajeActivo')).emailConductor,
    this.viaje.generoConductor= "",
    this.viaje.fecha= JSON.parse(localStorage.getItem('viajeActivo')).fecha,
    this.viaje.hora= JSON.parse(localStorage.getItem('viajeActivo')).hora,
    this.viaje.precio= JSON.parse(localStorage.getItem('viajeActivo')).precio,
    this.viaje.pasajeros= JSON.parse(localStorage.getItem('viajeActivo')).pasajeros,
    this.viaje.origen= JSON.parse(localStorage.getItem('viajeActivo')).origen,
    this.viaje.lngOrigen= 0,
    this.viaje.latOrigen= 0,
    this.viaje.regionDestino= JSON.parse(localStorage.getItem('viajeActivo')).regionDestino,
    this.viaje.comunaDestino= JSON.parse(localStorage.getItem('viajeActivo')).comunaDestino,
    this.viaje.direccionDestino= JSON.parse(localStorage.getItem('viajeActivo')).direccionDestino,
    this.viaje.lngDestino= JSON.parse(localStorage.getItem('viajeActivo')).lngDestino,
    this.viaje.latDestino= JSON.parse(localStorage.getItem('viajeActivo')).latDestino
  
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async enviar() {
    let alert = await this.alertController.create({
      header: "Tomar Viaje",
      message: "¿Quieres tomar este viaje?",
      buttons: [
        {
          text: "Confirmar",
          handler: async () =>{
            console.log("Tomar Viaje")
            await this.sleep(500);

            /*conductor*/
            send("gmail","template_abk8dr7",{
              comuna: this.viaje.comunaDestino,
              nombre: this.viaje.nombreConductor,
              nombrePasajero: JSON.parse(localStorage.getItem('onlineUser')).nombre,
              destino: this.viaje.direccionDestino+" "+this.viaje.regionDestino,
              fecha: this.viaje.fecha,
              lat: this.viaje.latDestino,
              lng: this.viaje.latDestino,
              emailDestino: this.viaje.emailConductor,
              });

            /*pasajero*/
            send("gmail","template_7clf6up",{
              comuna: this.viaje.comunaDestino,
              nombre: JSON.parse(localStorage.getItem('onlineUser')).nombre,
              nombreConductor: this.viaje.nombreConductor,
              destino: this.viaje.direccionDestino+", "+this.viaje.regionDestino,
              fecha: this.viaje.fecha,
              lat: this.viaje.latDestino,
              lng: this.viaje.lngDestino,
              emailDestino: JSON.parse(localStorage.getItem('onlineUser')).email,
              });

            this.elrouteruwu.navigate(['/inicio'])

            await this.sleep(800);
            const toast = await this.toastController.create({
              message: '                   Viaje Confirmado ✔ :)',
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

  retroceder(){
    this.elrouteruwu.navigate(['/buscar-viaje']);
  }

  ngOnInit() {
  }

}
