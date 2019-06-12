import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { EstadosRoutingModule } from './estados-routing.module';
import { EstadoListComponent } from './estado-list/estado-list.component';
import { EstadoFormComponent } from './estado-form/estado-form.component';
import { EstadoService } from './shared/estado.service';

@NgModule({
  declarations: [
    EstadoListComponent, 
    EstadoFormComponent
  ],
  imports: [
    SharedModule,
    EstadosRoutingModule
  ],
  providers: [EstadoService]
})
export class EstadosModule { }