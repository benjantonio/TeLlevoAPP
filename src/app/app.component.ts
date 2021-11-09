import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  usuariorecibido:any;
  menuCtrl:any;

  constructor(private menu: MenuController, private router: Router) {   
    
    this.usuariorecibido= JSON.parse(localStorage.getItem('usuario')).nombre;

   }

   
   retroceder(){
    localStorage.setItem('ingresado', 'false')
    this.router.navigate(['/login']);
    this.menu.close();
    
  }



}
