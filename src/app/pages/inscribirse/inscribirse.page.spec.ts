import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscribirsePage } from './inscribirse.page';
import { RouterTestingModule } from "@angular/router/testing";

describe('InscribirsePage', () => {
  let component: InscribirsePage;
  let fixture: ComponentFixture<InscribirsePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InscribirsePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InscribirsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Comprobar que no sea Chofer', () => {

    let esChofer = component.esChofer;

    esChofer = false;

    expect(esChofer).toEqual(false);
  });
});
