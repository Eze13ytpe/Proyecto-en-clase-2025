import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //URL base del modulo de productos en la api
  private apiURL = 'http://localhost/api_proyecto/public/products';

  constructor(private http: HttpClient) { }
  //construye las cabeceras HTTP necesarias para las solicitudes protegidas
  //si existe un token en localSroeage, lo incluye como cabecera de autorizacion

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'authorization': token ? `Bearer ${token}` : ''
    });
    return headers
  }

//Obtiene la lista completa de productos desde la api
// Es una ruta publica y no requiere token
getProducts() : Observable <producto[]> {
  return this.http.get<producto[]>(`${this.apiURL}`)
  .pipe(catchError(this.handleError));
}

//obtiene un producto especifico segun su identidicador
getProductById(id: number) : Observable <producto> {
  return this.http.get<producto>(`${this.apiURL}/${id}`)
  .pipe(catchError(this.handleError));


}
}