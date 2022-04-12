import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
})
export class DbzComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    },
    {
      nombre: 'Krillin',
      poder: 700
    }
  ];
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregarNuevoPersonaje(event:Personaje){
    this.personajes.push(event);
  }
}
