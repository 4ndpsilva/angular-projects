import { Component, OnInit } from '@angular/core';

import { Totalizer } from './model/totalizer';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  totalizer: Totalizer;

  bets15                = "15 Acertos"
  bets14                = "14 Acertos"
  accumulatedBet        = "Prêmio Acumulado";
  msgHighest            = "Maior prêmio já sorteado";
  msgLowest             = "Menor prêmio já sorteado";
  msgHighestAccumulated = "Maior prêmio já acumulado";
  msgLowestAccumulated  = "Menor prêmio já acumulado";
  
  constructor(private service: SearchService) { }

  ngOnInit(): void {
    this.service.search().subscribe(data => this.totalizer = data);
  }
}