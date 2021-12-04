import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIBdService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

    // API Falsa
   apiURL = 'http://192.168.100.24:3000';
    // Se establece la base url del API a consumir
     //apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }
  
  getCuentas():Observable<any>{
    return this.http.get(this.apiURL+'/cuentas/').pipe(
      retry(3)
    );
  }


  getViaje(idViaje):Observable<any>{
    return this.http.get(this.apiURL+'/viajes/'+idViaje).pipe(
      retry(3)
    );
  }
  
  getViajes():Observable<any>{
    return this.http.get(this.apiURL+'/viajes/').pipe(
      retry(3)
    );
  }

  createViaje(viaje):Observable<any>{
    return this.http.post(this.apiURL+'/viajes/',viaje,this.httpOptions).pipe(
      retry(3)
    );
  }
  
  updateViaje(idViaje, viaje):Observable<any>{
    return this.http.put(this.apiURL+'/viajes/'+idViaje,viaje,this.httpOptions).pipe(
      retry(3)
    );
  }

  deleteViaje(idViaje):Observable<any>{
    return this.http.delete(this.apiURL+'/viajes/'+idViaje,this.httpOptions).pipe(
      retry(3)
    );
  }

}



