import { Component, OnInit } from '@angular/core';
import { APIBdService } from 'src/app/services/apibd.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.scss'],
})
export class MisViajesComponent implements OnInit {

  viajesDeCuenta:any;
  idViaje:any;
  idCuentaActiva:any;

  constructor( private api:APIBdService, private elrouteruwu:Router) { }

  ionViewWillEnter(){
    this.obtenerViajesCuenta();
  }

  
  obtenerViajesCuenta(){
    this.viajesDeCuenta=this.api.obtenerViajesCuenta;
    console.log("OJO: ",this.viajesDeCuenta)
  } 

  obtenerIdViaje(id){ 
    this.idViaje=id;
    this.idViaje=this.idViaje-1;

    console.log("ESTE VIAJE TIENE ID: ",this.idViaje)
  }

  revisar(){
  }

  ngOnInit() {}

}
