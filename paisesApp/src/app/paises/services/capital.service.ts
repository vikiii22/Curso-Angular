import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceCapital } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl='https://restcountries.com/v2/capital';
  constructor(private http:HttpClient) { }

  buscarCapital(nombre:string):Observable<InterfaceCapital[]>{
    const url=`${this.apiUrl}/${nombre}`
    return this.http.get<InterfaceCapital[]>(url)
  }
}
