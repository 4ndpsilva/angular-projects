import { Component, Injector, Renderer2 } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../shared/components/base-form/base-form.component';
import { Estado } from '../shared/estado';
import { EstadoService } from '../shared/estado.service';


@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent extends BaseFormComponent<Estado>{
  constructor(
    protected injector: Injector,
    protected service: EstadoService, private renderer: Renderer2) {
      
    super(injector, new Estado(), service);
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
    this.renderer.selectRootElement('#nome').focus();
  }
}