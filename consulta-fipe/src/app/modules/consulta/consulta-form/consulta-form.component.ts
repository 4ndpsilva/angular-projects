import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoVeiculo } from '../model/tipo-veiculo.model';
import { FipeService } from '../service/fipe.service';
import { ConsultaDetailComponent } from './../consulta-detail/consulta-detail.component';


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

  constructor(private modalService: NgbModal, private service: FipeService){}

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
    const modal = this.modalService.open(ConsultaDetailComponent);
    modal.componentInstance.result = this.result;
  }

  reset(): void{
    this.marcas = [];
    this.modelos = [];
    this.anos = [];
  }
}