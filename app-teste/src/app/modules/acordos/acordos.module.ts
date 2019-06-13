import { NgModule, LOCALE_ID } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AcordosRoutingModule } from './acordos-routing.module';
import { AcordoListComponent } from './acordo-list/acordo-list.component';
import { AcordoFormComponent } from './acordo-form/acordo-form.component';

import { AcordoService } from './shared/acordo.service';
import { ClienteService } from './../clientes/shared/cliente.service';
import { EstadoService } from '../estados/shared/estado.service';
import { CidadeService } from './../cidades/shared/cidade.service';

@NgModule({
  declarations: [
    AcordoListComponent,
    AcordoFormComponent
  ],
  imports: [
    SharedModule,
    AcordosRoutingModule
  ],
  providers: [
    AcordoService,
    ClienteService,
    CidadeService,
    EstadoService
  ]
})
export class AcordosModule { }