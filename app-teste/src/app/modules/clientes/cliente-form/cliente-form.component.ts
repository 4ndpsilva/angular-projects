import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent } from '../../../shared/components/base-form/base-form.component';
import { ClienteService } from '../shared/cliente.service';
import { CidadeService } from '../../cidades/shared/cidade.service';
import { EstadoService } from '../../estados/shared/estado.service';
import { Cliente } from '../shared/cliente';
import { Estado } from '../../estados/shared/estado';
import { Cidade } from '../../cidades/shared/cidade';
import { phoneValidator } from '../../../shared/validators/phone-validator';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent extends BaseFormComponent<Cliente> implements OnInit {
  estados: Array<Estado>;
  cidades: Array<Cidade>;

  constructor(
    protected injector: Injector,
    protected clienteService: ClienteService,
    private renderer: Renderer2,
    private estadoService: EstadoService,
    private cidadeService: CidadeService) {

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
      cidadeId: [null, [Validators.required]],
      telefone: [null, [phoneValidator]], 
      email: [Validators.email]
    });
  }

  onChangeEstado(event): void{
    this.cidadeService.getByEstado(event.target.value).subscribe(data => this.cidades = data);
  }

  protected autoFocus(): void {
    this.renderer.selectRootElement('#nome').focus();
  }

  private loadEstados(){
    this.estadoService.getAll().subscribe(data => this.estados = data);
  }
}