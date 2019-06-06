import { Component, Input } from '@angular/core';

interface MenuItem{
  link: string;
  text: string;
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent{
  @Input('menu-items') menuItems: Array<MenuItem> = [];

  constructor() { }
}