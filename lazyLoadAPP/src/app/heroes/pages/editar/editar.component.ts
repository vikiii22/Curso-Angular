import { Component, OnInit } from '@angular/core';
import { InterfaceHeroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

interface Creador{
  id:string
  creador:string
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [`
    img{
      border-radius: 10px;
      width:100%;
    }
  `
  ]
})
export class EditarComponent implements OnInit {

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

  constructor( private heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroeId(id))
      )
      .subscribe(heroe => this.heroe=heroe);
  }

  actualizar(){
    if(this.heroe.superhero.trim().length === 0) return;
    this.heroesService.actualizarHeroe(this.heroe)
      .subscribe( resp=> {
        console.log(resp);
      })
  }

  eliminar(){
    this.heroesService.eliminarHeroe(this.heroe)
      .subscribe( resp => {
        console.log(resp);
        this.router.navigate(['/heroes']);
      })
  }
}
