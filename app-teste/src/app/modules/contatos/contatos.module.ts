import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ContatoService } from './shared/contato.service';

@NgModule({
  declarations: [
    ContatoListComponent,
    ContatoFormComponent
  ],
  imports: [
    SharedModule,
    ContatosRoutingModule
  ],
  providers: [ContatoService]
})
export class ContatosModule { }