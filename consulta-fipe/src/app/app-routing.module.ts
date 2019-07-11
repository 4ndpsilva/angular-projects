import { TesteComponent } from './modules/consulta/teste/teste.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ConsultaFormComponent } from './modules/consulta/consulta-form/consulta-form.component';

const routes: Routes = [
  //{path: '', component: ConsultaFormComponent}
  {path: '', component: TesteComponent}
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting{}