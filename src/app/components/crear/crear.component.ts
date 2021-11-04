import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIViajesService } from 'src/app/services/apiviajes.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;

  viaje:any={
    id:null,
    titulo:"",
    fecha:"",
    hora:"",
    direccion:"",
    precio:"",
    pasajeros:""
  };

  constructor(private elrouteruwu:Router, public toastController: ToastController, private api:APIViajesService) { }

guardarViaje(){
  this.api.createViaje(this.viaje).subscribe(async ()=>{
    console.log('viaje creado :d')
    console.log('dire: ',this.viaje.direccion, ' titulo: ',this.viaje.titulo)
    await this.sleep(2000);
    this.elrouteruwu.navigate(['/inicio'])
  })
}

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
      precio: new FormControl('',[
        Validators.required,
      ]),
    });
  }

  

}


