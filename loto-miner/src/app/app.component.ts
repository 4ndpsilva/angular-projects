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

  constructor(private service: SearchService){}

  ngOnInit(): void{
    this.service.search().subscribe( data => this.totalizer = data);
  }
}