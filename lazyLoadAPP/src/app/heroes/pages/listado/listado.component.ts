import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesService } from '../../services/heroes.service';
import { InterfaceHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
      margin: 20px;
    }
  `
  ]
})
export class ListadoComponent implements OnInit {

  heroes:InterfaceHeroe[]=[];

  constructor( private heroesSevice:HeroesService ) { }

  ngOnInit(): void {
    this.heroesSevice.getHeroes().
      subscribe( resp=> {
        this.heroes=resp;
      })
  }

}
