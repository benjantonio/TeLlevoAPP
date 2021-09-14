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

  constructor(private elrouteruwu:Router, public alertController: AlertController, public toastController: ToastController) { 
  }

  retroceder(){
    this.elrouteruwu.navigate(['/login'])
  }

  // ALERTA SIN USAR //
  /*
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Revisa tu email',
      message: 'Te hemos enviado un correo electrónico con un enlace de recuperación.',
      buttons: ['Continuar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  */
  // ALERTA SIN USAR //


  // TOAST //
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Te hemos enviado un email de recuperación.',
      duration: 2000
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
