import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIViajesService } from 'src/app/services/apiviajes.service';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  viajes:any;

  constructor(private elrouteruwu:Router, private api:APIViajesService) { }
  ionViewWillEnter(){
    this.getViajes();
  }


  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    })
  }

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
    
  }

  ngOnInit() {
  }

}
