import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { RouterTestingModule, } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule,RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Formulario Login Invalido', () => {

    const usuario = component.RegisterForm.controls['usuario'];
    const contrasena = component.RegisterForm.controls['contrasena']

    usuario.setValue('benja123');
    contrasena.setValue('');
    expect(component.RegisterForm.invalid).toBeTruthy();
  });
});
