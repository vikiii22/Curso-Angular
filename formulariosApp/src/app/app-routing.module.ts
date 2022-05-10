import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveModule } from './reactive/reactive.module';
import { TemplateModule } from './template/template.module';

const routes:Routes=[
  {
    path:'reactive',
    loadChildren:()=>import('./reactive/reactive.module').then(m=>m.ReactiveModule)
  },
  {
    path:'template',
    loadChildren:()=>import('./template/template.module').then(m=>m.TemplateModule)
  },
  {
    path:'**',
    redirectTo:'reactive'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
