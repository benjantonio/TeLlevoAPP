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
  numeroDirecc:any;
  lngDestino:any;
  latDestino:any;
  comunaDestino:any;
  regionDestino:any;

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
          console.log('RESPUESTA DEL MAPA: ', result)

          this.direcc="";
          this.numeroDirecc="";
          this.lngDestino="";
          this.latDestino="";
          this.comunaDestino="";
          this.regionDestino="";

          this.direcc=result.text;
          this.numeroDirecc=result.address;
          this.lngDestino=result.center[0];
          this.latDestino=result.center[1];
          this.comunaDestino=result.context[2].text;
          this.regionDestino=result.context[3].text;    
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

  devolverRegion(){
    return this.regionDestino;
  }

  devolverComuna(){
    
    if(this.comunaDestino){
      return this.comunaDestino;
    }else{
      return this.direcc;
    }
    
  }

  devolverDireccion(){

    let direccion:any;
    if(this.numeroDirecc){
      direccion=this.direcc+" "+this.numeroDirecc+", "+ this.comunaDestino
    }else{
      direccion=this.direcc+" "+ this.comunaDestino
    }
    return direccion;
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
