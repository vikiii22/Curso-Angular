import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisesComponent } from './pages/por-paises/por-paises.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { CapitalTablaComponent } from './components/capital-tabla/capital-tabla.component';
import { RegionTablaComponent } from './components/region-tabla/region-tabla.component';


@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisesComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    CapitalTablaComponent,
    RegionTablaComponent,
  ],
  exports: [
    PorCapitalComponent,
    PorPaisesComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
