import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { InterfacePaises } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-paises',
  templateUrl: './por-paises.component.html',
  styles: [
  ]
})
export class PorPaisesComponent {
  constructor(private paisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;
  paises:InterfacePaises[]=[];

  buscar(termino:string) {
    this.termino=termino;
    this.hayError = false;
    if (this.termino == "") {
      return;
    } else {
      console.log(this.termino);
      this.paisService.buscarNombre(this.termino)
        .subscribe((resp) => {
          // console.log(resp);
          this.paises=resp;
          console.log(this.paises);
        }, (err) => {
          this.hayError = true;
          this.paises=[];
        });
    }
  }

  sugerencias(evento:string){
    this.hayError=false;
  }
}
