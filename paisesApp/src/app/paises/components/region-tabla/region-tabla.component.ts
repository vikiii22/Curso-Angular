import { Component, Input } from '@angular/core';
import { InterfacePaises } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styles: [
  ]
})
export class RegionTablaComponent{

  constructor() { }

  @Input() paises:InterfacePaises[]=[];
}
