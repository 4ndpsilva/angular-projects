import { Component, OnInit } from '@angular/core';

import { FipeService } from '../service/fipe.service';
import { TipoVeiculo } from './../model/tipo-veiculo.model';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  tipos: Array<TipoVeiculo>;
  tiposFiltered: any[];
  marcas: Array<any> = [];
  modelos: Array<any> = [];
  anos: Array<any> = [];
  filter: any = {};
  result: any;

  constructor(private service: FipeService){}

  ngOnInit(): void{
    this.tipos = this.service.tipos;
  }

  listarSugestoes(event?: any){
    this.tiposFiltered = [];
    this.tipos
      .filter(t => t.descricao.toLocaleLowerCase().indexOf(event.query.toLowerCase()) == 0)
      .map(tipo => this.tiposFiltered.push(tipo.descricao));
    
  }

  onSelectTipoVeiculo(event?: any): void{
    this.reset();
    console.log(this.filter.tipoVeiculo);
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

  onSearch(): void{
    this.service.search(this.filter).subscribe(data => this.result = data);
  }

  reset(): void{
    this.marcas = [];
    this.modelos = [];
    this.anos = [];
  }
}