import { Injectable }  from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class APIUsuarioService {
    httpOptions = {
        headers : new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    apiUrl= 'https://jsonplaceholder.typicode.com';
    constructor(private http: HttpClient){}
    /**
     * @name getUsuario
     * @param idUser contiene el id del usuario
     * @returns objeto con datos de usuario
     */
    async getUsuario(idUser): Promise<any>{
        try{
            const response = await this.http.get(this.apiUrl+'/usuarios/'+idUser);
            return response;
         }catch(e){
            throw new Error(e);
        }
    }
    /**
     * @name getUsuarios
     * @returns listado de usuarios existentes
     */
    async getUsuarios(): Promise<any>{
        try{
            const response = await this.http.get(this.apiUrl+'/usuarios/');
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
    /**
     * @name setUsuario
     * @param request cuerpo de request, que contiene body con datos a setear
     * @returns response o error dependiendo de flujo
     */
    async setUsuario(request): Promise<any>{
        try{
            const response = await this.http.post(this.apiUrl+'/usuarios/', request.body, {
                headers: this.httpOptions.headers
            });
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
    /**
     * @name updateUsuario
     * @param request contiene cuerpo de objeto a actualizar uno o mas campos
     * @returns response o error dependiendo de flujo
     */
    async updateUsuario(request): Promise<any>{
        try{
            const response = await this.http.patch(this.apiUrl+'/usuarios/'+request.id, request.body, {
                headers: this.httpOptions.headers
            });
            return response;
        }catch(e){
            throw new Error(e);
        }
    }
}
