import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; //Controlador de alerta (no se está usando)
import { ToastController } from '@ionic/angular'; //Controlador de Toast

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  RegisterForm: FormGroup;
  emailingresado:any;

  cargando: boolean;

  constructor(private elrouteruwu:Router, public alertController: AlertController, public toastController: ToastController) { 
  }

  //creo función para retrasar ciertas funciones.
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async retroceder(){
    this.cargando=true;
    await this.sleep(800);
    this.elrouteruwu.navigate(['/login'])
    this.cargando=false;
    this.RegisterForm.reset();
  }

  // TOAST //
  async presentToast() {
    await this.sleep(650);
    const toast = await this.toastController.create({
      message: 'Te hemos enviado un email de recuperación.',
      duration: 3500,
      color: 'light',
      position: 'bottom',
    });
    toast.present();
  }

  ngOnInit() {

    this.RegisterForm = new FormGroup({
      
      /* VALIDACION DE EMAIL SIN USAR
      email: new FormControl('',[
        Validators.pattern("^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$"),
        Validators.required,
      ]),  */
      usuario: new FormControl('',[
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(15),
      ]),
               
    });
  }
  

}