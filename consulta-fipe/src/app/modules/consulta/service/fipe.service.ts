import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { TipoVeiculo } from '../model/tipo-veiculo.model';

@Injectable()
export class FipeService {
  private url: string;
  private _tipos: Array<TipoVeiculo> = [];

  constructor(private http: HttpClient) {
    this.url = "http://fipeapi.appspot.com/api/1";
    
    this._tipos = [
      {valor: "carros", descricao: "Carros"}, 
      {valor: "motos", descricao: "Motos"}, 
      {valor: "caminhoes", descricao: "Caminhões"}
    ];
  }

  public findByTipoVeiculo(filter: any): Observable<any>{
    return this.http.get(`${this.url}/${filter.tipoVeiculo}/marcas.json`);
  }

  public findByMarca(filter: any): Observable<any>{
    return this.http.get(`${this.url}/${filter.tipoVeiculo}/veiculos/${filter.marca}.json`);
  }

  public findByModelo(filter: any): Observable<any>{
    return this.http.get(`${this.url}/${filter.tipoVeiculo}/veiculo/${filter.marca}/${filter.modelo}.json`);
  }

  public search(filter: any): Observable<any>{
    let queryString = `${filter.tipoVeiculo}/veiculo/${filter.marca}/${filter.modelo}/${filter.ano}`;
    return this.http.get(`${this.url}/${queryString}.json`);
  }

  public get tipos(): Array<TipoVeiculo>{
    return this._tipos;
  }
}