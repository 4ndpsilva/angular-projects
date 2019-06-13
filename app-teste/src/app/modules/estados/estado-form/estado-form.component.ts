import { Component, Injector } from '@angular/core';

import { BaseFormComponent } from '../../../shared/components/base-form/base-form.component';
import { EstadoService } from '../shared/estado.service';
import { Estado } from '../shared/estado';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent extends BaseFormComponent<Estado>{  
  constructor(
      protected injector: Injector, 
      protected service: EstadoService){
      super(injector, new Estado(), service, Estado.fromJson);
  }

  protected buildForm(): void{
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.maxLength(2)]]
    });
  }
}