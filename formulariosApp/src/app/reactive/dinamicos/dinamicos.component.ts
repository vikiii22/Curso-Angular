import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private formBuilder: FormBuilder) { }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.minLength(3), Validators.required]],
  });

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors;
  };

  guardar() {
    (this.miFormulario.invalid) ? '' : console.log(this.miFormulario.value);
  }
}
