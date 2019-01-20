import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from '../model/categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  list: Array<Categoria>;

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.listAll();
  }

  edit(id: number = null): void{
    this.router.navigate(['/form']);
  }

  delete(obj: Categoria): void{
    let deletar = confirm(`Deseja excluir a Categoria ${obj.descricao}`);
    
    if(deletar){
      this.service.delete(obj.id);
      this.listAll();
    }
  }

  listAll(): void{
    this.list = this.service.listAll();
  }
}