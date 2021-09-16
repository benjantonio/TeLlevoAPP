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
    this.router.navigate(['/login']);
  }

  closeMenu(){
    this.menu.close;
  }


}
