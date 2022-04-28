import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Pipes Angular',
        icon:'pi pi-desktop',
        items:[
          {
            label:'Textos y fechas',
            icon: 'pi pi-calendar',
            routerLink: 'full'
          },
          {
            label:'Números',
            icon: 'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label: 'No comúnes',
            icon: 'pi pi-apple',
            routerLink: 'no-comunes'
          },
          {
            label: 'Ordenar',
            icon: 'pi pi-book',
            routerLink: 'ordenar'
          }
        ]
      },
      {
        label:'Pipes Personalizados',
        icon: 'pi pi-android'
      }
    ];
  }

}
