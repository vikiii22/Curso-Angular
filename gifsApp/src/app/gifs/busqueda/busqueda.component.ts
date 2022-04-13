import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  constructor(private gifService:GifsService) {}

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;
  
  buscar( gifBuscado:string ){
    const valor=this.txtBuscar.nativeElement.value;
    // console.log(valor);
    this.gifService.buscarGif(valor);
    this.txtBuscar.nativeElement.value='';
  }
}
