import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//DEBES IMPORTAR LOS ROUTERS DE AQUI ARRIBA//
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular'; //Controlador de Toast
import { BdLocalService } from 'src/app/services/bd-local.service';
import { AppComponent } from '../../app.component';
import { APIBdService } from 'src/app/services/apibd.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

//ESTA VARIABLE RECIBE Y GUARDA EL USUARIO INGRESADO//
usuariorecibido:any;

controlmenu:boolean;
cargando: boolean;
conduce: boolean;


  //AQUI INGRESAMOS LOS CONSTRUCTORES NECESARIOS PARA PODER LLAMAR A LA VARIABLE DESDE OTRA PAGE//
  constructor(private api:APIBdService,private activeroute: ActivatedRoute, private elrouteruwu:Router, private menu: MenuController, public toastController: ToastController, public bd: BdLocalService, private app:AppComponent) {
    this.activeroute.queryParams.subscribe(params=> {
      if(this.elrouteruwu.getCurrentNavigation().extras.state){
        this.usuariorecibido= this.elrouteruwu.getCurrentNavigation().extras.state.usuario;
      }else{
        this.usuariorecibido= JSON.parse(localStorage.getItem('onlineUser')).user;
      }
    })
   }

   ionViewWillEnter(){
    this.app.actualizarAvatar();
    this.app.actualizarNombreMenu();
    this.conduce=JSON.parse(localStorage.getItem('onlineUser')).crearViajes;
    
  }

     //creo función para retrasar ciertas funciones.
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  



  inscribirse(){
    this.elrouteruwu.navigate(['/inscribirse']);
  }

   retroceder(){
    this.elrouteruwu.navigate(['/login']);
   }

   async programar(){
    this.cargando=true;
    await this.sleep(800);
    this.cargando=false;
    await this.sleep(200);
    this.elrouteruwu.navigate(['/panel-viajes']);
   }
   
   async buscar() {
    this.cargando=true;
    await this.sleep(800);
    this.cargando=false;
    await this.sleep(200);
    this.elrouteruwu.navigate(['/buscar-viaje']);
  }




  ngOnInit() {
    
  }

}
