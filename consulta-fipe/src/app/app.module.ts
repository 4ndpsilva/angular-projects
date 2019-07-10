import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { ConsultaDetailComponent } from './modules/consulta/consulta-detail/consulta-detail.component';
import { ConsultaFormComponent } from './modules/consulta/consulta-form/consulta-form.component';
import { FipeService } from './modules/consulta/service/fipe.service';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaFormComponent,
    ConsultaDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    AppRouting
  ],
  providers: [FipeService],
  bootstrap: [AppComponent],
  entryComponents: [ConsultaDetailComponent]
})
export class AppModule { }