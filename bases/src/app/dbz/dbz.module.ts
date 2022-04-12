import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz-main/dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DbzComponent,
    AgregarComponent,
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
