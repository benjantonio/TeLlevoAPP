import { Injectable }  from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class APIViajeService {
    httpOptions = {
        headers : new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };
    //apiUrl= 'https://jsonplaceholder.typicode.com';
    apiUrl= 'http://192.168.100.10:3000';
    constructor(private http: HttpClient){}
    /**
     * @name getViaje
     * @param idUser contiene el id del usuario
     * @returns objeto con datos de viaje
     */
    getViaje(idUser): Observable<any>{
        try{
            const response = this.http.get(this.apiUrl+'/viajes/'+idUser);
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
    /**
     * @name getViajes
     * @returns listado de viajes existentes
     */
    getViajes(): Observable<any>{
        try{
            const response = this.http.get(this.apiUrl+'/viajes/');
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
    /**
     * @name setViaje
     * @param request contiene datos de viaje, falta origen y destino se deben asignar desde la vista en formulario
     * @returns response o error dependiendo de flujo
     */
    setViaje(request): Observable<any>{
        try {
            const viaje = {
                titulo: request.titulo,
                fecha: request.fecha,
                hora: request.hora,
                capacidad: request.capacidad,
                origen: '',
                destino: ''
            };
            const response = this.http.post(this.apiUrl+'/viajes/', viaje , this.httpOptions);
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
    /**
     * @name updateViaje
     * @param request contiene cuerpo de objeto a actualizar uno o mas campos
     * @returns response o error dependiendo de flujo
     */
     updateViaje(request): Observable<any>{
        try{
            const response = this.http.patch(this.apiUrl+'/viajes/'+request.id, request.body, {
                headers: this.httpOptions.headers
            });
            return response;
        }catch(e){
            throw new Error(e);
        }
    }

    /**
     * @name deleteViaje
     * @param request id de viaje a eliminar
     * @returns response o error dependiendo de flujo
     */
     deleteViaje(request): Observable<any>{
        try{
            const response = this.http.delete(this.apiUrl+'/viajes/'+request.id);
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
}
