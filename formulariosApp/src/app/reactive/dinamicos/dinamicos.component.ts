import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

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
    favoritos: this.formBuilder.array([
      ['Assassins Creed ', Validators.required],
      ['Far Cry', Validators.required]
    ], Validators.required)
  });

  nuevo:FormControl=this.formBuilder.control('', Validators.required);

  get getFavoritos(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors;
  };

  guardar() {
    (this.miFormulario.invalid) ? '' : console.log(this.miFormulario.value);
  };

  agregar(){
    (this.nuevo.invalid) ? '' : this.getFavoritos.push(new FormControl(this.nuevo.value, Validators.required));
  }

  eliminar(position:number){
    this.getFavoritos.removeAt(position);
  }
}
