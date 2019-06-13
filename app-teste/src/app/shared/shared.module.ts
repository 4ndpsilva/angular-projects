import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent
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
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule { }