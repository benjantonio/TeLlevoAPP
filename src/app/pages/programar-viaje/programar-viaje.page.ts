import { Injectable } from '@angular/core'; // at top
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular'; //Controlador de Toast
import { APIViajeService } from 'src/app/services/viaje.service';


@Injectable({
  providedIn: 'root' // just before your class
})


@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})


export class ProgramarViajePage implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;
  viaje: any;

  ;
  constructor(private elrouteruwu:Router, public toastController: ToastController,  private apiViaje: APIViajeService) { }

    //creo función para retrasar ciertas funciones.
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

  async abrirmapa(){
    this.cargando=true;
    await this.sleep(1000);
    this.elrouteruwu.navigate(['/map']);
    this.apagarboton=true;
    this.cargando=false;
  }

  viajeRecibido(viaje){
    this.viaje= viaje;
  }

  async guardarViaje(){
    await this.apiViaje.setViaje(this.RegisterForm.value).subscribe(this.viajeRecibido);    
    this.elrouteruwu.navigate(['/inicio']);
    this.apagarboton=false;
    this.cargando=false;

  }

  async crearviaje(){
    this.cargando=true;
    this.guardarViaje();
    await this.sleep(3000);
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


  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit() {

    this.RegisterForm = new FormGroup({
      titulo: new FormControl('',[
        Validators.required
      ]),
      fecha: new FormControl('',[
        Validators.required
      ]),
      hora: new FormControl('',[
        Validators.required
      ]),
      capacidad: new FormControl('',[
        Validators.required
      ]),
    });
  }
}
