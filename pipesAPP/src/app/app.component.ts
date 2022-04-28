import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAPP';
  nombre:string="jose antonio"
  nombreSolo:string='';

  cambiarNombre(n:string){
    console.log(n);
    this.nombreSolo=this.nombre.slice(0, 4);
  }
}
