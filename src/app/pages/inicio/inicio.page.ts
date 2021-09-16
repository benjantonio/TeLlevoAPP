import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//DEBES IMPORTAR LOS ROUTERS DE AQUI ARRIBA//

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

//ESTA VARIABLE RECIBE Y GUARDA EL USUARIO INGRESADO//
usuariorecibido:any;


  //AQUI INGRESAMOS LOS CONSTRUCTORES NECESARIOS PARA PODER LLAMAR A LA VARIABLE DESDE OTRA PAGE//
  constructor(private activeroute: ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(params=> {
      if(this.router.getCurrentNavigation().extras.state){
        this.usuariorecibido= this.router.getCurrentNavigation().extras.state.usuario;
      }
    })
   }

   retroceder(){
     this.router.navigate(['/login']);
   }

  ngOnInit() {
  }


}
