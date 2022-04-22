import { Component } from '@angular/core';
import { InterfacePaises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { CapitalService } from '../../services/capital.service';
import { InterfaceCapital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  constructor(private CapitalService:CapitalService) { }

  termino: string = '';
  hayError: boolean = false;
  capital:InterfaceCapital[]=[];

  buscar(termino:string) {
    this.termino=termino;
    this.hayError = false;
    if (this.termino == "") {
      return;
    } else {
      console.log(this.termino);
      this.CapitalService.buscarCapital(this.termino)
        .subscribe((resp) => {
          // console.log(resp);
          this.capital=resp;
          console.log(this.capital);
        }, (err) => {
          this.hayError = true;
          this.capital=[];
        });
    }
  }

  sugerencias(evento:string){
    this.hayError=false;
  }
}
