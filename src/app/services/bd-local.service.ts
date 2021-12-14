import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { CuentasI } from '../interfaces/cuentas';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  cuenta: CuentasI[]=[]

  private _storage: Storage | null = null;
  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init();
  }
  
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarCuentas(){
    const misCuentas=await this.storage.get('cuenta');
    if(misCuentas){
      this.cuenta=misCuentas;
    }
    console.log(this.cuenta);
  }

  guardarCuenta(id: number,
    user: string,
    pass: string,
    nombre: string,
    img: string,
    genero: string,
    edad: string,
    email: string,
    institucion: string,
    lat: string,
    lng: string,
    crearViajes: boolean){
    const existe=this.cuenta.find(usu=>usu.id===id);
    if (!existe) {
      this.cuenta.unshift({id:id, user:user,pass:pass,nombre:nombre,img:img,genero:genero,edad:edad,email:email,institucion:institucion,lat:lat,lng:lng,crearViajes:crearViajes});
      this._storage.set('cuenta',this.cuenta);
    } 
  }

  
}
