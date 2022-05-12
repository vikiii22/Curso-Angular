import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  persona:Persona={
    nombre:'Jose Luis',
    favoritos:[
      {
        id: 1,
        nombre:`Assassyn's creed`
      },
      {
        id: 2,
        nombre: 'Far cry'
      }
    ]
  }

  nuevoJuego:string='';

  constructor() { }

  guardar() {

  }

  agregar(){
    const nuevo:Favorito={id: this.persona.favoritos.length + 1, nombre:this.nuevoJuego};
    this.persona.favoritos.push(nuevo);
    this.nuevoJuego='';
  }

  eliminar( id:number ){
    this.persona.favoritos.splice(id, 1);
  }

}
