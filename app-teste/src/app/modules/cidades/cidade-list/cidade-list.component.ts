import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/components/base-list/base-list.component';
import { Cidade } from '../shared/cidade';
import { CidadeService } from '../shared/cidade.service';


@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent extends BaseListComponent<Cidade>{
  constructor(protected service: CidadeService) { 
    super(service);
    this.title = "Cidades";
  }
}