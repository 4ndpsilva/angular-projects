import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent } from '../../../shared/components/base-form/base-form.component';
import { EstadoService } from '../shared/estado.service';
import { Estado } from '../shared/estado';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent extends BaseFormComponent<Estado>{
  @ViewChild("nome", {static: false}) nomeField: ElementRef; 

  constructor(
    protected injector: Injector,
    protected service: EstadoService) {
    super(injector, new Estado(), service, Estado.fromJson);
  }

  protected buildForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      sigla: [null, [Validators.required, Validators.minLength(2)]]
    });
  }

  protected autoFocus(): void {
    this.nomeField.nativeElement.focus();
  }
}