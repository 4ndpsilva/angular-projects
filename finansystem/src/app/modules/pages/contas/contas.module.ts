import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import { ContaListComponent } from './conta-list/conta-list.component';
import { ContaFormComponent } from './conta-form/conta-form.component';

@NgModule({
  declarations: [
    ContaListComponent, 
    ContaFormComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule
  ]
})
export class ContasModule { }
