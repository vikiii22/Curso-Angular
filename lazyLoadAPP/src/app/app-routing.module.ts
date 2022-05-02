import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { AuthModule } from './auth/auth.module';

const routes:Routes=[
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroe',
    loadChildren:()=>import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path:'404',
    component:ErrorPagesComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
