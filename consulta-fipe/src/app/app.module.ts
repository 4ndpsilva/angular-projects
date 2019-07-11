import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { ConsultaFormComponent } from './modules/consulta/consulta-form/consulta-form.component';
import { ConsultaDetailComponent } from './modules/consulta/consulta-detail/consulta-detail.component';
import { TesteComponent } from './modules/consulta/teste/teste.component';
import { FipeService } from './modules/consulta/service/fipe.service';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaFormComponent,
    ConsultaDetailComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AutoCompleteModule,
    ButtonModule,
    AppRouting
  ],
  providers: [FipeService],
  bootstrap: [AppComponent],
  entryComponents: [ConsultaDetailComponent]
})
export class AppModule { }