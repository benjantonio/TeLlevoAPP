import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  mapa: Mapboxgl.map;
  title = 'mapboxgl';
  constructor() { }

  ngOnInit() {


    (Mapboxgl as any).accessToken = environment.maptokenkey;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.5321227, -33.0338412],
      zoom: 15.5
    });
    this.crearMarcador(-71.5333227, -33.0338412);
  }

  crearMarcador(lng:number,lat:number){

    const popup = new Mapboxgl.Popup()
                      .setHTML('<h6 style="padding:0; margin:0;">Tu destino:</h6>')

    const marker = new Mapboxgl.Marker({
      draggable: true,

    }).setLngLat([lng,lat])
    .setPopup(popup)
    .addTo(this.mapa);
  }

}
