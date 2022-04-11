import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz-main/dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DbzComponent,
  ]
})
export class DbzModule { }
