import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spider-Man', 'Iron-Man', 'Hulk', 'Viuda Negra', 'Thor', 'Capitán América', 'Capitana Marvel'];
  borrados:any[]=[];
  borrarHeroe() {
    var position=0;
    this.heroes.forEach(e=>{
      if(e=='Thor'){
        position=this.heroes.indexOf(e);
      }
    })
    var borrado=this.heroes.splice(position, 1);
    this.borrados.unshift(borrado);
  }
}
