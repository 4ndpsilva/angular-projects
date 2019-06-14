import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/components/base-list/base-list.component';
import { Cliente } from '../../clientes/shared/cliente';
import { AcordoService } from '../shared/acordo.service';


@Component({
  selector: 'app-acordo-list',
  templateUrl: './acordo-list.component.html',
  styleUrls: ['./acordo-list.component.css']
})
export class AcordoListComponent extends BaseListComponent<Cliente>{
  constructor(protected service: AcordoService) {
    super(service);
    this.title = "Acordos";
  }
}