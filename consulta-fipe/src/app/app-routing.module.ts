import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ConsultaRoutingModule } from './modules/consulta/consulta-routing.module';

const routes: Routes = [
  {path: 'home', loadChildren: './modules/consulta/consulta.module#ConsultaModule'} 
]; 

@NgModule({
  imports: [
    ConsultaRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting{}