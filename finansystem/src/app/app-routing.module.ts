import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasModule } from './modules/pages/categorias/categorias.module';
import { ContasModule } from './modules/pages/contas/contas.module';
import { RelatoriosModule } from './modules/pages/relatorios/relatorios.module';

const routes: Routes = [
  {path: 'categorias', loadChildren: './modules/pages/categorias/categorias.module#CategoriasModule'},
  {path: 'contas', loadChildren: './modules/pages/contas/contas.module#ContasModule'},
  {path: 'lancamentos', loadChildren: './modules/pages/lancamentos/lancamentos.module#LancamentosModule'},
  {path: 'relatorios', loadChildren: './modules/pages/relatorios/relatorios.module#RelatoriosModule'}
];

@NgModule({
  imports: [
    CategoriasModule,
    ContasModule,
    RelatoriosModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }