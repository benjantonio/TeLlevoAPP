import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular'; //Controlador de alerta (no se está usando)
import { ToastController } from '@ionic/angular'; //Controlador de Toast

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})


export class ProgramarViajePage implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;

  constructor(private elrouteruwu:Router, public toastController: ToastController) { }

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
