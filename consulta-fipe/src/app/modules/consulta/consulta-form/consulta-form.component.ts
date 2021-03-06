import { Component, OnInit } from '@angular/core';

import { TipoVeiculo } from '../model/tipo-veiculo.model';
import { FipeService } from '../service/fipe.service';


@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {
  tipos: Array<TipoVeiculo>;
  marcas: Array<any> = [];
  modelos: Array<any> = [];
  anos: Array<any> = [];
  filter: any = {};
  result: any;

  constructor(private service: FipeService){}

  ngOnInit(): void{
    this.tipos = this.service.tipos;
  }

  onSelectTipoVeiculo(event?: any): void{
    this.reset();
    this.service.findByTipoVeiculo(this.filter).subscribe(data => this.marcas = data);
  }

  onSelectMarca(event?: any): void{
    if(this.modelos.length > 0 && this.anos.length > 0){
      this.onSelectTipoVeiculo(event);
    }   

    this.service.findByMarca(this.filter).subscribe(data => this.modelos = data);
  }

  onSelectModelo(event?: any): void{
    this.service.findByModelo(this.filter).subscribe(data => this.anos = data);  
  }

  onSearch(event?: any): void{
    this.service.search(this.filter).subscribe(data => this.result = data);
  }

  reset(): void{
    this.marcas = [];
    this.modelos = [];
    this.anos = [];
  }
}