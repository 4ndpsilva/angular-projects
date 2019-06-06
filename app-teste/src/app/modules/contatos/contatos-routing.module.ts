import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

const routes: Routes = [
  {path: '', component: ContatoListComponent},
  {path: 'new', component: ContatoFormComponent},
  {path: ':id/edit', component: ContatoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }