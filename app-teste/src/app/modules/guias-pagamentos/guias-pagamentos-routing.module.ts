import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaPagamentoListComponent } from './guia-pagamento-list/guia-pagamento-list.component';

const routes: Routes = [
  {path: '', component: GuiaPagamentoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiasPagamentosRoutingModule { }