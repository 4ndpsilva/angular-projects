import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../../environments/environment';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MenuBarComponent
  ]
})
export class CoreModule { }
