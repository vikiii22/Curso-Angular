import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceHeroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get<InterfaceHeroe[]>( 'http://localhost:3000/heroes' );
  }
}
