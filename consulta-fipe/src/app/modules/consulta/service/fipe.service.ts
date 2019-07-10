import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { TipoVeiculo } from '../model/tipo-veiculo.model';
import { environment } from '../../../../environments/environment';


@Injectable()
export class FipeService {
  private _tipos: Array<TipoVeiculo> = [];

  constructor(private http: HttpClient) {  
    this._tipos = [
      {valor: "carros", descricao: "Carros"}, 
      {valor: "motos", descricao: "Motos"}, 
      {valor: "caminhoes", descricao: "Caminhões"}
    ];
  }

  public findByTipoVeiculo(filter: any): Observable<any>{
    return this.http.get(`${environment.apiPath}/${filter.tipoVeiculo}/marcas.json`);
  }

  public findByMarca(filter: any): Observable<any>{
    return this.http.get(`${environment.apiPath}/${filter.tipoVeiculo}/veiculos/${filter.marca}.json`);
  }

  public findByModelo(filter: any): Observable<any>{
    return this.http.get(`${environment.apiPath}/${filter.tipoVeiculo}/veiculo/${filter.marca}/${filter.modelo}.json`);
  }

  public search(filter: any): Observable<any>{
    let queryString = `${filter.tipoVeiculo}/veiculo/${filter.marca}/${filter.modelo}/${filter.ano}`;
    return this.http.get(`${environment.apiPath}/${queryString}.json`);
  }

  public get tipos(): Array<TipoVeiculo>{
    return this._tipos;
  }
}