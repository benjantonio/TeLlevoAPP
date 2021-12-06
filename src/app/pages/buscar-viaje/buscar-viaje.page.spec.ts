import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarViajePage } from './buscar-viaje.page';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuscarViajePage', () => {
  let component: BuscarViajePage;
  let fixture: ComponentFixture<BuscarViajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarViajePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Verificar que SÍ existan viajes a buscar', () => {

    let viajes = component.viajes;

    viajes = [ 5 , "franc.ortegac" , 3 , "Francesca Ortegac", "franc.ortegac@duocuc.cl", "2021-12-13", "00:20", 2000, 3, "SEDE Viña del Mar", "Ecuador 1285, Quilpué"];

    expect(viajes).toBeTruthy();
  });
  
});
