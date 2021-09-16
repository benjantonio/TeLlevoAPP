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

  //AQUI INGRESAMOS LOS CONSTRUCTORES NECESARIOS PARA PODER LLAMAR A LA VARIABLE DESDE OTRA PAGE//
  constructor(private activeroute: ActivatedRoute, private elrouteruwu:Router, private menu: MenuController) {
    this.activeroute.queryParams.subscribe(params=> {
      if(this.elrouteruwu.getCurrentNavigation().extras.state){
        this.usuariorecibido= this.elrouteruwu.getCurrentNavigation().extras.state.usuario;
      }
    })
   }

   retroceder(){
     this.elrouteruwu.navigate(['/login']);
   }

   programar(){
    this.elrouteruwu.navigate(['/programar-viaje']);
   }

   openMenu(){
     this.menu.isOpen;
   }



  ngOnInit() {
    
  }

}
