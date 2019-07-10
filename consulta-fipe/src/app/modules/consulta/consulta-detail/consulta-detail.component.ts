import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-consulta-detail',
  templateUrl: './consulta-detail.component.html',
  styleUrls: ['./consulta-detail.component.css']
})
export class ConsultaDetailComponent{
  @Input() result: any;
  
  constructor(private activeModal: NgbActiveModal) { }

  voltar(): void{
    this.activeModal.dismiss();
  }
}