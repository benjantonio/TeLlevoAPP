import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  RegisterForm: FormGroup;

  emailingresado:any;

  constructor() { }


  

  ngOnInit() {

    this.RegisterForm = new FormGroup({
      email: new FormControl('',[
        Validators.pattern("^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$"),
      ]),     
      
      
      
    });
  }

}
