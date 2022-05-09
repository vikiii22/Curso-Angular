import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceHeroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get<InterfaceHeroe[]>( 'http://localhost:3000/heroes' );
  }

  getHeroeId( id:string ){
    return this.http.get<InterfaceHeroe>('http://localhost:3000/heroes/'+id)
  }

  getSugerencias( termino:string ){
    return this.http.get<InterfaceHeroe[]>('http://localhost:3000/heroes?q='+termino+'&_limit=3');
  }

  setNuevoHeroe( heroe:InterfaceHeroe){
    return this.http.post<InterfaceHeroe>('http://localhost:3000/heroes', heroe);
  }

  actualizarHeroe( heroe:InterfaceHeroe ){
    return this.http.put<InterfaceHeroe>(`http://localhost:3000/heroes/${heroe.id}`, heroe)
  }

  eliminarHeroe( heroe:InterfaceHeroe ){
    return this.http.delete<InterfaceHeroe>(`http://localhost:3000/heroes/${heroe.id}`);
  }
}
