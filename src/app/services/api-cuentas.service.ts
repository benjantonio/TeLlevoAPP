import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APICuentasService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

    // API Falsa
   apiURL = 'http://192.168.100.23:3000';
    // Se establece la base url del API a consumir
     //apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  getCuentas():Observable<any>{
    return this.http.get(this.apiURL+'/cuentas/').pipe(retry(3)
    );
  }

  createCuenta(cuenta):Observable<any>{
    return this.http.post(this.apiURL+'/cuentas',cuenta,this.httpOptions).pipe(retry(3)
    );
  }
}