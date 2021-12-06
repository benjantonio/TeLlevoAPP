import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmarViajePage } from './confirmar-viaje.page';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfirmarViajePage', () => {
  let component: ConfirmarViajePage;
  let fixture: ComponentFixture<ConfirmarViajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ 
      declarations: [ ConfirmarViajePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
