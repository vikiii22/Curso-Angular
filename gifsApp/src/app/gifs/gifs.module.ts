import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs/gifs.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifsComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsComponent,
    BusquedaComponent,
    ResultadoComponent
  ]
})
export class GifsModule { }
