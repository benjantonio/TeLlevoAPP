import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  RegisterForm: FormGroup;

  emailingresado:any;

  constructor(private elrouteruwu:Router, public alertController: AlertController) { 
  }

  retroceder(){
    this.elrouteruwu.navigate(['/login'])
  }
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
  ngOnInit() {

    this.RegisterForm = new FormGroup({
      email: new FormControl('',[
        Validators.pattern("^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$"),
        Validators.required,
      ]),  
      usuario: new FormControl('',[
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(15),
      ]),
               
    });
  }
  

}
