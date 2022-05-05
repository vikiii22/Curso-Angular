import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete/autocomplete';
import { InterfaceHeroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: InterfaceHeroe[] = [];
  heroeElegido!:InterfaceHeroe;

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroeService.getSugerencias( this.termino )
      .subscribe(e => this.heroes = e);
  }

  seleccionado( evento:MatAutocompleteSelectedEvent ){
    const heroeObtenido:InterfaceHeroe=evento.option.value;
    this.termino=heroeObtenido.superhero;
    this.heroeService.getHeroeId(heroeObtenido.id!)
      .subscribe( e => this.heroeElegido=e);
  }
}
