import { Component } from '@angular/core';

import { BaseListComponent } from '../../../shared/components/base-list/base-list.component';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent extends BaseListComponent<Cliente>{
  constructor(protected service: ClienteService) { 
    super(service);
    this.title = "Clientes";
  }
}