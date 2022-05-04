import { Component, Input, OnInit } from '@angular/core';
import { InterfaceHeroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin:20px
    }
  `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroes: InterfaceHeroe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
