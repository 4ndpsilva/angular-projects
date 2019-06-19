import { Component, OnInit, Injector, Renderer2 } from '@angular/core';

import { BaseFormComponent } from '../../../shared/components/base-form/base-form.component';
import { Estado } from '../../estados/shared/estado';
import { Cidade } from '../shared/cidade';
import { CidadeService } from '../shared/cidade.service';
import { EstadoService } from '../../estados/shared/estado.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent extends BaseFormComponent<Cidade> implements OnInit {
  estados: Array<Estado>;

  constructor(
    protected injector: Injector,
    protected cidadeService: CidadeService,
    private renderer: Renderer2,
    private estadoService: EstadoService) {

    super(injector, new Cidade(), cidadeService);
  }

  ngOnInit(): void {
    this.loadEstados();
    super.ngOnInit();
  }    

  protected buildForm(): void {    
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      estadoId: [null, [Validators.required]]
    });
  }

  protected autoFocus(): void {
    this.renderer.selectRootElement('#nome').focus();
  }

  private loadEstados(){
    this.estadoService.getAll().subscribe(data => this.estados = data);
  }
}