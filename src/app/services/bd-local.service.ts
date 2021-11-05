import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Cuentas } from '../interfaces/cuentas';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {
/*
  cuenta: Cuentas[]=[]

  private _storage: Storage | null = null;
  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init();
    this.cargarCuentas();

  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarCuentas(){
    const cuentas=await this._storage.get('cuenta');
    if(cuentas){
      this.cuenta=cuentas;
    }
  }

  guardarCuenta(usuario: string, contraseña: string){
    const existe=this.cuenta.find(usu=>usu.strUsuario===usuario);
    if (!existe) {
      this.cuenta.unshift({strUsuario:usuario, strContraseña:contraseña});
      this._storage.set('cuenta',this.cuenta);
      this.presentToast("Cuenta agregaad con éxito")
    } else {
      this.presentToast("[ERROR] Contacto ya existe :(")
    }
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: 'medium',
      translucent:true,

    });
    toast.present();
  }*/
}
