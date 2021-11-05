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
  lat = 40.416906;
  lng = -3.7056721;
  zoom = 3;

  constructor() { 
    this.mapbox.accessToken = environment.maptokenkey;
  }

  buildMap():Promise<any> {
    return new Promise((resolve, reject) => {
      try {
      this.map = new this.mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.5321227, -33.0338412],
      zoom: 15.5
        });
  
        const geocoder = new MapboxGeocoder({
          accessToken:mapboxgl.accessToken,
          mapboxgl
        })

        resolve({
          map:this.map,
          geocoder
        });
        
      } catch (e) {
        reject(e)
      }

      
    });
  }

}
