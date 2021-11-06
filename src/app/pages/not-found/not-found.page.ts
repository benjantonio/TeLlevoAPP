import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  cargando: boolean;
  RegisterForm: any;

  constructor(private elrouteruwu:Router) { }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async retroceder(){
    this.cargando=true;
    this.elrouteruwu.navigate(['/inicio'])
    this.cargando=false;
    this.RegisterForm.reset();
  }

  ngOnInit() {
  }

}
