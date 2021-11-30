import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panel-viajes',
  templateUrl: './panel-viajes.page.html',
  styleUrls: ['./panel-viajes.page.scss'],
})
export class PanelViajesPage implements OnInit {

  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;
  opcionSegment: string = "crear";
  
  constructor(private elrouteruwu:Router, public toastController: ToastController) { 
    this.elrouteruwu.navigate(['panel-viajes/crear'])
  }

  segmentChanged(event: any){
    console.log(event);
    let ruta=event.detail.value
    this.elrouteruwu.navigate(['panel-viajes/'+ruta])
  }

 
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
    this.apagarboton=false;
    this.cargando=false;
  }




async crearviaje(){
  this.cargando=true;
  await this.sleep(3000);
  this.elrouteruwu.navigate(['/inicio']);
  this.apagarboton=false;
  this.cargando=false;
}

   // TOAST //
   async presentToast() {
    
    await this.sleep(3700);
    const toast = await this.toastController.create({
      message: '¡Tu viaje ha sido creado con éxito!.',
      duration: 3500,
      color: 'success',
      position: 'bottom',
    });
    toast.present();
  }

ngOnInit() {

  this.RegisterForm = new FormGroup({
    titulo: new FormControl('',[
      Validators.required, 
    ]),
    fecha: new FormControl('',[
      Validators.required,
    ]),
    hora: new FormControl('',[
      Validators.required, 
    ]),
    capacidad: new FormControl('',[
      Validators.required,
    ]),
  });
}

  
}
