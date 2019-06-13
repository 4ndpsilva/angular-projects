import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { EstadoService } from './../estados/shared/estado.service';
import { CidadeService } from './shared/cidade.service';

@NgModule({
  declarations: [CidadeListComponent, CidadeFormComponent],
  imports: [
    SharedModule,
    CidadesRoutingModule
  ],
  providers: [CidadeService, EstadoService]
})
export class CidadesModule { }