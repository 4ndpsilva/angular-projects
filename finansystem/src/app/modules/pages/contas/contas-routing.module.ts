import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaListComponent } from './conta-list/conta-list.component';

const routes: Routes = [
  {path: '', component: ContaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
