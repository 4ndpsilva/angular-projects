import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-consulta-detail',
  templateUrl: './consulta-detail.component.html',
  styleUrls: ['./consulta-detail.component.css']
})
export class ConsultaDetailComponent{
  @Input() result: any;
  
  constructor() { }

  voltar(): void{
  }
}