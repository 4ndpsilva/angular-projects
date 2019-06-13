import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcordoListComponent } from './acordo-list/acordo-list.component';
import { AcordoFormComponent } from './acordo-form/acordo-form.component';

const routes: Routes = [
  {path: '', component: AcordoListComponent},
  {path: 'new', component: AcordoFormComponent},
  {path: ':id/edit', component: AcordoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcordosRoutingModule { }