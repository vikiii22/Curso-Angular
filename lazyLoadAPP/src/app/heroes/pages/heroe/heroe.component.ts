import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceHeroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  idGuardado: string = '';
  heroe!: InterfaceHeroe;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroeId(id))
      )
      .subscribe(heroe => {
        this.heroe = heroe;
      });
  }

}
