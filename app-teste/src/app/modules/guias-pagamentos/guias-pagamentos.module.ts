import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { GuiasPagamentosRoutingModule } from './guias-pagamentos-routing.module';
import { GuiaPagamentoListComponent } from './guia-pagamento-list/guia-pagamento-list.component';

@NgModule({
  declarations: [
    GuiaPagamentoListComponent
  ],
  imports: [
    SharedModule,
    GuiasPagamentosRoutingModule
  ]
})
export class GuiasPagamentosModule { }