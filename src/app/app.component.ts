import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {

  menuCtrl:any;

  constructor(private menu: MenuController, private router: Router) {   
   }

   retroceder(){
    localStorage.setItem('ingresado', 'false')
    this.router.navigate(['/login']);
    this.menu.close();
    
  }



}
