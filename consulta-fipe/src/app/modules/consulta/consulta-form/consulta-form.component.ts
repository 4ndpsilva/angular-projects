import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TipoVeiculo } from '../model/tipo-veiculo.model';
import { FipeService } from '../service/fipe.service';


@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {
  title = 'Consulta FIPE';
  tipos: Array<TipoVeiculo>;
  marcas: Array<any> = [];
  modelos: Array<any> = [];
  anos: Array<any> = [];
  filter: any = {};
  result: any;

  constructor(private service: FipeService, private router: Router){}

  ngOnInit(): void{
    this.tipos = this.service.tipos;
  }

  onSelectTipoVeiculo(): void{
    this.reset();
    this.service.findByTipoVeiculo(this.filter).subscribe(data => this.marcas = data);
  }

  onSelectMarca(): void{
    if(this.modelos.length > 0 && this.anos.length > 0){
      this.onSelectTipoVeiculo();
    }    

    this.service.findByMarca(this.filter).subscribe(data => this.modelos = data);
  }

  onSelectModelo(): void{
    this.service.findByModelo(this.filter).subscribe(data => this.anos = data);  
  }

  onSearch(): void{
    this.service.search(this.filter).subscribe(data => this.result = data);
    this.router.navigate(['/search']);
  }

  reset(): void{
    this.marcas = [];
    this.modelos = [];
    this.anos = [];
  }
}