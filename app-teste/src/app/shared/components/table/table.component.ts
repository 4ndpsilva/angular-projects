import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input('list-of-columns') listOfColumns: string[]; 
  @Input('list-of-fields') listOfFields: string[]; 
  @Input('list-of-data') listOfData: Array<any>; 

  dataset: Array<any>;
  
  constructor() { 
    this.load();
  }

  load(): void{
    for(let obj in this.listOfData){
      let data = {};
      this.listOfFields.forEach(p => Object.defineProperty(data, p, {value: obj[p]}));
      this.dataset.push(data);
    }
  }
}