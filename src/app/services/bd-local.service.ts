import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { CuentasI } from '../interfaces/cuentas';
import { ViajesI } from '../interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  cuenta: CuentasI[]=[]
  viaje: ViajesI[]=[]

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

  async cargarViajes(){
    
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOJOOO")
    console.log(this.viaje);
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

  async guardarViaje(
    id:number,
    userConductor: string,
    idConductor: string,
    nombreConductor: string,
    edadConductor: string,
    imgConductor: string,
    emailConductor: string,
    generoConductor: string,
    fecha: string,
    hora: string,
    precio: string,
    pasajeros: string,
    origen: string,
    lngOrigen: string,
    latOrigen: string,
    regionDestino:string,
    comunaDestino:string,
    direccionDestino: string,
    lngDestino: string,
    latDestino: string){

    const misViajes=await this.storage.get('viaje');
    if(misViajes){
    this.viaje=misViajes;
    }
    
    this.viaje.unshift({
      id:id,
      userConductor: userConductor,
      idConductor: idConductor,
      nombreConductor: nombreConductor,
      edadConductor: edadConductor,
      imgConductor: imgConductor,
      emailConductor: emailConductor,
      generoConductor: generoConductor,
      fecha: fecha,
      hora: hora,
      precio: precio,
      pasajeros: pasajeros,
      origen: origen,
      lngOrigen: lngOrigen,
      latOrigen: latOrigen,
      regionDestino:regionDestino,
      comunaDestino:comunaDestino,
      direccionDestino: direccionDestino,
      lngDestino: lngDestino,
      latDestino: latDestino});
    this._storage.set('viaje',this.viaje);

    
  }

  async test(){
    const misViajes=await this.storage.get('viaje');
    console.log("------")
    console.log(misViajes)

    let viajes = misViajes;
    viajes.forEach(setFunction);
    function setFunction(direccionDestino,id, callingSet){
      console.log(id," OJJOOKJOKKO", direccionDestino);
      console.log(viajes === callingSet);
    }
  }
  
  
}
