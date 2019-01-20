import { Injectable } from '@angular/core';

import { Categoria } from './model/categoria';

@Injectable()
export class CategoriaService {
  tipo: string;

  constructor() { 
    this.tipo = "categoria";
  }

  save(categoria: Categoria): void {
    localStorage.setItem(this.tipo+categoria.id, JSON.stringify(categoria));
  }

  delete(id: number): void{
    localStorage.removeItem(this.tipo+id);
  }

  findById(id: number): Categoria{
    return JSON.parse(localStorage.getItem(this.tipo+id));
  }

  listAll(): Array<Categoria>{
    return this.getList();
  }

  private getList(): Array<Categoria>{
    let list = new Array<Categoria>();

    for(let i = 0; i < localStorage.length; i++){
      list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    return list;
  }
}