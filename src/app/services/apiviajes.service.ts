import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIViajesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

    // API Falsa
   apiURL = 'http://192.168.100.10:3000';
    // Se establece la base url del API a consumir
     //apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  getViajes():Observable<any>{
    return this.http.get(this.apiURL+'/viajes/').pipe(retry(3)
    );
  }

  createViaje(viaje):Observable<any>{
    return this.http.post(this.apiURL+'/viajes',viaje,this.httpOptions).pipe(retry(3)
    );
  }
}



