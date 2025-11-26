import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //URL base del modulo de usuarios en la api
  private apiURL = 'http://localhost/api_proyecto/public/users';


  constructor(private http: HttpClient) {}

    //Envia las credenciales al backend y retorna la respuesta del servidor
    login(datos: any) :Observable < any > {
      return this.http.post('$(this.apiURL)/login', datos);
    }



    //envia los datos del nuevo usuario al backlend para registrar su cuenta
    register(datos: any) : Observable < any > {
      return this.http.post('$(this.apiURL)/register', datos);
    }

    //guarda el token y el rol del usuario en el almacenamiento local
    guardadrSesion(token: string, rol: string) {
      localStorage.setItem('token', token);
      localStorage.setItem('rol', rol);
    }

    //retorna el rol almacenado, o null si no existe
    obtenerRol(): string | null {
      return localStorage.getItem('rol');
    }

    esAdmin(): boolean {
      return localStorage.getItem('rol') === 'admin';
}

//Elimina los datos de la sesion almacenados
logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('rol');
}





}