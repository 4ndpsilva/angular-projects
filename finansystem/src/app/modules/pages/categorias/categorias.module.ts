import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaService } from './categoria.service';

@NgModule({
  declarations: [
    CategoriaListComponent, 
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule
  ],
  providers: [CategoriaService]
})
export class CategoriasModule { }