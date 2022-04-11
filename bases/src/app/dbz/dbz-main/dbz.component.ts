import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
})
export class DbzComponent {
  nuevo:Personaje={
    nombre:'',
    poder:0,
  }

  personajes:Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:8000
    },
    {
      nombre:'Krillin',
      poder:700
    }
  ];
  
  agregar() {
    if(this.nuevo.nombre==''){
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
}
