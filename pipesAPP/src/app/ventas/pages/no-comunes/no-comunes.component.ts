import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})

export class NoComunesComponent {

  constructor() { }

  nombre: string = 'Jose';
  genero: string = 'Hombre';
  invitacion = {
    'Hombre': 'tenerlo',
    'Mujer': 'tenerla'
  };

  clientes: string[] = ['Jopse', 'Pedro', 'María'];
  clienteMap = {
    '=0': 'No hay nadie',
    '=1': '1 Cliente',
    'other': '# Clientes'
  };

  personajo = {
    direccion: 'Aspe',
    edad: '20',
    nombre: 'Jose'
  }
}