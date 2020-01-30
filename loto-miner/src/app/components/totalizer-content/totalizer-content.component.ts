import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-totalizer-content',
  templateUrl: './totalizer-content.component.html',
  styleUrls: ['./totalizer-content.component.css']
})
export class TotalizerContentComponent {
  @Input()
  title: string;

  @Input()
  content: string;
  
  @Input()
  detail: string;
}