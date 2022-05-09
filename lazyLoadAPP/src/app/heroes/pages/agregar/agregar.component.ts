import { Component, OnInit } from '@angular/core';
import { InterfaceHeroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

interface Creador{
  id:string
  creador:string
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})

export class AgregarComponent implements OnInit {

  creadores:Creador[]=[
    {
      id:"Marvel Comics",
      creador:"Marvel Comics"
    },
    {
      id:"DC Comics",
      creador:"DC - Cómics"
    }
  ];

  heroe:InterfaceHeroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.MarvelComics,
    alt_img:''
  };

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0) return;
    this.heroesService.setNuevoHeroe(this.heroe)
      .subscribe( resp=> {
        console.log(resp);
      })
  }
}