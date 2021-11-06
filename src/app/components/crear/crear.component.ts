import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIViajesService } from 'src/app/services/apiviajes.service';
import { MapCustomService } from 'src/app/services/map-custom.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;
  cargando: boolean;

  direc:any;

  viaje:any={
    id:null,
    titulo:"",
    fecha:"",
    hora:"",
    direccion:"",
    precio:"",
    pasajeros:""
  };



  constructor(
    private elrouteruwu:Router, 
    public toastController: ToastController, 
    private api:APIViajesService, 
    private activeroute: ActivatedRoute, 
    public map:MapCustomService
    ) { 
    
  }


guardarViaje(){
  this.viaje.direccion=this.map.devolverDireccion()
  this.api.createViaje(this.viaje).subscribe( ()=>{
    console.log('viaje creado :d')
    console.log( ' ingresada a api: ',this.viaje.direccion)

    this.elrouteruwu.navigate(['/inicio'])
  })
}

    //creo función para retrasar ciertas funciones.
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    probando(){
      console.log("asasdds PRUEBA PRUEBA")
    }

    retroceder(){
      this.elrouteruwu.navigate(['/inicio']);
      this.apagarboton=false;
      this.cargando=false;
    }

  async abrirmapa(){
    this.cargando=true;
    await this.sleep(1000);
    this.elrouteruwu.navigate(['/programar-viaje']);
    /* Revisar apagarboton */
    this.apagarboton=this.map.extraerBlock();
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


