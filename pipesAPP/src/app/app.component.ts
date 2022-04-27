import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAPP';
  nombre:string="jose"

  cambiarNombre(n:string){
    console.log(n);
  }
}
