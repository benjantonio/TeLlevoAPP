import { Component, OnInit } from '@angular/core';
import { APIBdService } from 'src/app/services/apibd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.scss'],
})
export class MisViajesComponent implements OnInit {

  viajes:any;
  viajesDeCuenta= [];
  idViaje:any;
  idCuentaActiva=JSON.parse(localStorage.getItem('onlineUser')).id;

  constructor(private api:APIBdService, private elrouteruwu:Router) { }

  ionViewWillEnter(){
    this.getViajes();
  }

  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      console.log("VIAJES NORMALES: ", data)
      
      let largoviajes:any;
      largoviajes=data.length;

      console.log("LARGO VIAJES NORMALES: ",largoviajes)

      for(let i=0; i < largoviajes; i++){
        if(data[i].idConductor == this.idCuentaActiva){
          this.viajesDeCuenta.push(data[i])
        }
      }

      console.log("idCuenta Iniciada: ", this.idCuentaActiva);
      console.log("VIAJES Cuenta!: ", this.viajesDeCuenta)
    });
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
