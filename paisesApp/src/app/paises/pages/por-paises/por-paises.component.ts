import { Component } from '@angular/core';

@Component({
  selector: 'app-por-paises',
  templateUrl: './por-paises.component.html',
  styles: [
  ]
})
export class PorPaisesComponent {
  termino: string = '';

  buscar() {
    if (this.termino == "") {
      return;
    } else {
      console.log(this.termino);
    }
  }
}
