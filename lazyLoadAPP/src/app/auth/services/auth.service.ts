import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceUsuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }

  existeUsuario( id:number ){
    return this.http.get<InterfaceUsuario>(`http://localhost:3000/usuarios/${id}`);
  }

  registrarUsuario (usuario:InterfaceUsuario){
    return this.http.post<InterfaceUsuario>(`http://localhost:3000/usuarios`, usuario);
  }
}
