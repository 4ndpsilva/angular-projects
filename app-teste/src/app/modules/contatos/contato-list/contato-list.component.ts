import { Component, OnInit } from '@angular/core';

import { Contato } from '../shared/contato';
import { ContatoService } from '../shared/contato.service';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {
  pessoas: Array<Contato>;

  constructor(private service: ContatoService){}

  ngOnInit(): void{
    this.service.getAll().subscribe(data => this.pessoas = data);
  }
}
