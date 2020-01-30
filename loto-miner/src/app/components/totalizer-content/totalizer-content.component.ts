import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-totalizer-content',
  templateUrl: './totalizer-content.component.html',
  styleUrls: ['./totalizer-content.component.css']
})
export class TotalizerContentComponent {
  @Input()
  title: string;

  @Input("content-value1")
  contentValue1: string;

  @Input("content-value2")
  contentValue2: string;
  
  @Input()
  detail1: string;

  @Input()
  detail2: string;
}