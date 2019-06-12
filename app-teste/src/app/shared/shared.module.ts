import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    RouterModule,
    AngularFirestoreModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFirestoreModule,
    BreadCrumbComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }