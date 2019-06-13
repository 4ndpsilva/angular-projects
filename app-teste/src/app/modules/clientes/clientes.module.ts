import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteService } from './shared/cliente.service';
import { CidadeService } from './../cidades/shared/cidade.service';
import { EstadoService } from '../estados/shared/estado.service';


@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteFormComponent
  ],
  imports: [
    SharedModule,
    ClientesRoutingModule
  ],
  providers: [
    ClienteService, 
    CidadeService,
    EstadoService
  ]
})
export class ClientesModule { }