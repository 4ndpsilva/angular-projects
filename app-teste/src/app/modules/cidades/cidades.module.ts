import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';

@NgModule({
  declarations: [CidadeListComponent, CidadeFormComponent],
  imports: [
    SharedModule,
    CidadesRoutingModule
  ]
})
export class CidadesModule { }