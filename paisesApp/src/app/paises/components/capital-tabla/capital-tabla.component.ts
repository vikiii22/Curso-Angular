import { Component, Input } from '@angular/core';
import { InterfaceCapital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent{

  constructor() { }

  @Input() capital:InterfaceCapital[]=[];

}
