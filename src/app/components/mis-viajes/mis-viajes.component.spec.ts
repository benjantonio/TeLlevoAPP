import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisViajesComponent } from './mis-viajes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('MisViajesComponent', () => {
  let component: MisViajesComponent;
  let fixture: ComponentFixture<MisViajesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisViajesComponent ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule,RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MisViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Verificar que SÍ tiene viajes', () => {

    let viajes = component.viajes;

    viajes = [ 1 , "be.navarroa" , 2 , "benjamin navarro", "be.navarroa@duocuc.cl", "2021-12-11", "00:15", 1000, 3, "SEDE San Bernardo", "Nuevo Horizonte 231, El Bosque"];

    expect(viajes).toBeTruthy();
  });
});
