import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from './../model/categoria';
import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  categoria: Categoria;

  constructor(private router: Router, private service: CategoriaService) { }

  ngOnInit() {
    this.categoria = new Categoria();
  }

  save(): void{
    this.service.save(this.categoria);

    if(this.categoria.id > 0){
      this.router.navigate(['/categorias']);
    }

    this.categoria = new Categoria();
  }

  cancel(): void{
    this.categoria = null;
    this.router.navigate(['/categorias']);
  }
}