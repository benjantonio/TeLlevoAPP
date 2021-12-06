import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscribirse',
  templateUrl: './inscribirse.page.html',
  styleUrls: ['./inscribirse.page.scss'],
})
export class InscribirsePage implements OnInit {

  esChofer:any;

  constructor(private elrouteruwu:Router) { }

  ionWillViewEnter(){
    this.esChofer=JSON.parse(localStorage.getItem('onlineUser')).crearViajes; /* puede crear viajes? */
  }

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
  }

  ngOnInit() {
  }

  
}
