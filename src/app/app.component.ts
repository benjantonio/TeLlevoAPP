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
  menu1:any;
  avatarOnline:string;

  constructor(private menu: MenuController, private router: Router) {   

   }

  ionViewWillEnter(){
    this.actualizarAvatar();
  }

   actualizarAvatar(){
     this.avatarOnline= JSON.parse(localStorage.getItem('onlineUser')).img;
   }

   ionViewDidEnter ( ) : void  { 
     this.menu.enable(false);
   }

   ionViewDidLeave ( ) : void  { 
    this.menu.enable(true);
  }

   actualizarNombreMenu(){
    this.usuariorecibido= JSON.parse(localStorage.getItem('onlineUser')).user;
   }

   retroceder(){
    localStorage.setItem('ingresado', 'false')
    this.router.navigate(['/login']);
    this.menu.close();
    this.menu.enable(false);
  }



}
