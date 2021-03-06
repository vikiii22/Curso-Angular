import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component:HeroesHomeComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'heroe-home',
        component: HeroesHomeComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        path: '**',
        redirectTo: 'heroe-home'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
