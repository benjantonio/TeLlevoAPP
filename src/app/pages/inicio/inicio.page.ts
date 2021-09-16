import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//DEBES IMPORTAR LOS ROUTERS DE AQUI ARRIBA//
import { MenuController } from '@ionic/angular';


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
  constructor(private activeroute: ActivatedRoute, private elrouteruwu:Router, private menu: MenuController) {
    this.activeroute.queryParams.subscribe(params=> {
      if(this.elrouteruwu.getCurrentNavigation().extras.state){
        this.usuariorecibido= this.elrouteruwu.getCurrentNavigation().extras.state.usuario;
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
    this.elrouteruwu.navigate(['/programar-viaje']);
    this.cargando=false;
   }


  ngOnInit() {
    
  }

}
