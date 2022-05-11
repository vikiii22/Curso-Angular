import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  initForm={
    producto:'Huevos de Pascua',
    precio:10,
    existencias:10
  };

  valido: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    if (!this.nombreValido() && !this.precioValido()) {
      console.log('posteo correcto');
    }else{
      return
    }
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto'].invalid && this.miFormulario?.controls['producto'].touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio'].value <= 0 && this.miFormulario?.controls['precio'].touched;
  }
}
