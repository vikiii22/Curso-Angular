import { Component } from '@angular/core';

interface MenuItem{
  texto:string,
  ruta:string
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {
  menuTemplate:MenuItem[]=[
    {
      texto:'Básicos',
      ruta: 'template/basicos'
    },
    {
      texto:'Dinámicos',
      ruta: 'template/dinamicos'
    },
    {
      texto:'Switches',
      ruta: 'template/switches'
    }
  ];

  menuReactive:MenuItem[]=[
    {
      texto:'Básicos',
      ruta: 'reactive/basicos'
    },
    {
      texto:'Dinámicos',
      ruta: 'reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta: 'reactive/switches'
    }
  ];
}
