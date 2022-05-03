import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container{
      margin:10px;
    }
  `
  ]
})
export class HeroesHomeComponent implements OnInit {

  constructor( private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( resp=> console.log( resp ))
  }

}
