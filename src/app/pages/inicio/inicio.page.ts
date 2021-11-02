import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//DEBES IMPORTAR LOS ROUTERS DE AQUI ARRIBA//
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular'; //Controlador de Toast


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


  //AQUI INGRESAMOS LOS CONSTRUCTORES NECESARIOS PARA PODER LLAMAR A LA VARIABLE DESDE OTRA PAGE//
  constructor(private activeroute: ActivatedRoute, private elrouteruwu:Router, private menu: MenuController, public toastController: ToastController) {
    this.activeroute.queryParams.subscribe(params=> {
      if(this.elrouteruwu.getCurrentNavigation().extras.state){
        this.usuariorecibido= this.elrouteruwu.getCurrentNavigation().extras.state.usuario;
      }else{
        this.usuariorecibido= JSON.parse(localStorage.getItem('usuario')).nombre;
      }
    })
   }

     //creo función para retrasar ciertas funciones.
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
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
    const toast = await this.toastController.create({
      message: '¡Próximamente!',
      duration: 1500,
      color: 'secondary',
      position: 'bottom',
    });
    toast.present();
  }




  ngOnInit() {
    
  }

}
