import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
})
export class DbzComponent {
  // personajes:Personaje[]=[];

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }


  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // agregarNuevoPersonaje(event: Personaje) {
  //   this.personajes.push(event);
  // }

  constructor(public dbzService: DbzService) {
    // this.personajes=dbzService.personajes;
  }
}
