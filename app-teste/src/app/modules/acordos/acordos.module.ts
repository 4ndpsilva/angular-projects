import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcordosRoutingModule } from './acordos-routing.module';
import { AcordoListComponent } from './acordo-list/acordo-list.component';
import { AcordoFormComponent } from './acordo-form/acordo-form.component';

@NgModule({
  declarations: [
    AcordoListComponent,
    AcordoFormComponent
  ],
  imports: [
    CommonModule,
    AcordosRoutingModule
  ]
})
export class AcordosModule { }