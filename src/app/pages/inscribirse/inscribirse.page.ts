import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscribirse',
  templateUrl: './inscribirse.page.html',
  styleUrls: ['./inscribirse.page.scss'],
})
export class InscribirsePage implements OnInit {

  constructor(private elrouteruwu:Router) { }

  retroceder(){
    this.elrouteruwu.navigate(['/inicio']);
  }

  ngOnInit() {
  }

}
