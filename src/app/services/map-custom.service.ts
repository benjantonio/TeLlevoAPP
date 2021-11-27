import { EventEmitter, Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MapCustomService { 
  cbAddress: EventEmitter<any> = new EventEmitter<any>();

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style: 'mapbox://styles/mapbox/streets-v11';
  lat = JSON.parse(localStorage.getItem('onlineUser')).lat;
  lng = JSON.parse(localStorage.getItem('onlineUser')).lng;
  zoom = 3;

  direcc:any;
  lngDestino:any;
  latDestino:any;

  bloquear: boolean;

  constructor() { 
    this.mapbox.accessToken = environment.maptokenkey;
  }

  buildMap():Promise<any> {
    return new Promise((resolve, reject) => {
      try {
      this.map = new this.mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],
      zoom: 15.5
        });
  
        const geocoder = new MapboxGeocoder({
          accessToken:mapboxgl.accessToken,
          mapboxgl
        })

        geocoder.on('result', ($event) => {
          const {result} = $event;
          console.log('*********OOOJOOJOJ', result)
          this.direcc=result.place_name;
          this.lngDestino=result.center[0];
          this.latDestino=result.center[1];
          console.log('coordenadas actualizadas: ',this.lngDestino, this.latDestino)
        });

        resolve({
          map:this.map,
          geocoder
        });
        
      } catch (e) {
        reject(e)
      }

      
    });
  }

  devolverDireccion(){
    return this.direcc;
  }

  devolverLng(){
    return this.lngDestino;
  }

  devolverLat(){
    return this.latDestino;
  }
  
  /*blockMap(bool: boolean){
    this.bloquear=bool;
  }

  extraerBlock(){
    return this.bloquear;
  }*/

}
