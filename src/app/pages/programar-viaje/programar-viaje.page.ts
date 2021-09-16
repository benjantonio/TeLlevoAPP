import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})


export class ProgramarViajePage implements OnInit {
  RegisterForm: FormGroup;
  apagarboton:boolean;

  constructor(private elrouteruwu:Router) { }

  abrirmapa(){
    this.elrouteruwu.navigate(['/map']);
    this.apagarboton=true;
  }

  crearviaje(){
    this.elrouteruwu.navigate(['/inicio']);
    this.apagarboton=false;
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
    });
  }
}
