import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiasPagamentosRoutingModule } from './guias-pagamentos-routing.module';
import { GuiaPagamentoListComponent } from './guia-pagamento-list/guia-pagamento-list.component';

@NgModule({
  declarations: [
    GuiaPagamentoListComponent
  ],
  imports: [
    CommonModule,
    GuiasPagamentosRoutingModule
  ]
})
export class GuiasPagamentosModule { }