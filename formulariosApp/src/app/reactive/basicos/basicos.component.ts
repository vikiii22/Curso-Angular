import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario:FormGroup=new FormGroup({
  //   nombre:new FormControl('RTX 4080 TI'),
  //   precio:new FormControl(1500),
  //   existencias: new FormControl(100)
  // });

  constructor( private formBuilder:FormBuilder ) { }

  miFormulario:FormGroup=this.formBuilder.group({
    nombre:[ , [Validators.required, Validators.minLength(3)]],
    precio:[ , [Validators.required, Validators.min(0)]],
    existencias:[ , [Validators.required, Validators.min(0)]]
  });

  campoValido( campo:string ):boolean | null{
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
}
