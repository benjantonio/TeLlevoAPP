import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
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
  title_add;
  latitude;
  longitude;
  zoom;

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
    // Do some stuff
    console.log(address);
    console.log('Latitud : ' + address.geometry.location.lat());
    console.log('Longitud : ' + address.geometry.location.lng());

    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
    
  }
  public setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      })
    }
  }
}


