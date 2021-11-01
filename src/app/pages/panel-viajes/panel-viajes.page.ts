import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-viajes',
  templateUrl: './panel-viajes.page.html',
  styleUrls: ['./panel-viajes.page.scss'],
})
export class PanelViajesPage implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['home/crear'])
  }

  segmentChanged(event: any){
    console.log(event);
    let ruta=event.detail.value
    this.router.navigate(['home/'+ruta])
  }

  ngOnInit() {
  }

}
