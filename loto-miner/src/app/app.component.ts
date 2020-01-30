import { Component, OnInit } from '@angular/core';

import { Totalizer } from './model/totalizer';
import { SearchService } from './service/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  totalizer: Totalizer;
  msgLowest15 = "Menor prêmio já sorteado";
  msgLowest14 = "Menor prêmio já sorteado";
  msgHighest15 = "Maior prêmio já sorteado";
  msgHighest14 = "Maior prêmio já sorteado";
  bets15 = "15 Acertos"
  bets14 = "14 Acertos"

  constructor(private service: SearchService){}

  ngOnInit(): void{
    this.service.search().subscribe( data => this.totalizer = data);
  }
}