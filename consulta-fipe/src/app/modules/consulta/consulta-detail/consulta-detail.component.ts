import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router'; 

@Component({
  selector: 'app-consulta-detail',
  templateUrl: './consulta-detail.component.html',
  styleUrls: ['./consulta-detail.component.css']
})
export class ConsultaDetailComponent{
  constructor(private router: Router) { }

  voltar(): void{
    this.router.navigate(['/fipe']);
  }
}