import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfacePaises } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  buscarNombre(nombre: string): Observable<InterfacePaises[]> {
    const url = `${this.apiUrl}/name/${nombre}`
    return this.http.get<InterfacePaises[]>(url);
  }
}
