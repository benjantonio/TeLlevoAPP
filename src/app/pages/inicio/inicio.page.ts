import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'cluster';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
//DEBES IMPORTAR LOS ROUTERS DE AQUI ARRIBA//

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  title= 'angular-maps';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options = {
    types : [],
    componentRestrictions: {country: 'CHL'}
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  title_add: any;
  latitude:
  longitude;

//ESTA VARIABLE RECIBE Y GUARDA EL USUARIO INGRESADO//
usuariorecibido: any;

  //AQUI INGRESAMOS LOS CONSTRUCTORES NECESARIOS PARA PODER LLAMAR A LA VARIABLE DESDE OTRA PAGE//
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params=> {
      if(this.router.getCurrentNavigation().extras.state){
        this.usuariorecibido= this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
   }

   retroceder(){
     this.router.navigate(['/login']);
   }

  ngOnInit() {
  }
  public handleAddressChange(address: Address) {
    console.log(address);
    console.log('Latitud  : ',address.geometry.location.lat());
    console.log('Longitud  : ',address.geometry.location.lng());
}
}


