import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 

import { AppComponent } from './app.component';
import { TotalizerContentComponent } from './components/totalizer-content/totalizer-content.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    TotalizerContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }