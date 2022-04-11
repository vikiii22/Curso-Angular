import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroes.component.html'
})

export class HeroeComponent {
    nombre:string='Iron Man';
    edad:number=45;

    obtenerNombre():string{
        return this.nombre + " - " + this.edad;
    };

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    };

    cambiarNombre(nuevoNombre:string){
        this.nombre=nuevoNombre;
    };

    cambiarEdad(nuevaEdad:number){
        this.edad=nuevaEdad;
    };

    nuevaPrueba(){
        
    }
}