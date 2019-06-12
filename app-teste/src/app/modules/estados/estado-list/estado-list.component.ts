import { Component } from '@angular/core';

import { BaseListComponent } from 'src/app/shared/components/base-list/base-list.component';
import { Estado } from '../shared/estado';
import { EstadoService } from '../shared/estado.service';

@Component({
  selector: 'app-estado-list',
  templateUrl: './estado-list.component.html',
  styleUrls: ['./estado-list.component.css']
})
export class EstadoListComponent extends BaseListComponent<Estado>{
  constructor(protected service: EstadoService) { 
    super(service);
    this.title = "Estados";
  }
}