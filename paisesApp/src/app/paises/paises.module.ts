import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisesComponent } from './pages/por-paises/por-paises.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisesComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisesComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisesModule { }
