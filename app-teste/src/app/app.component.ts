import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Agenda';

  menuItems: Array<any>;

  ngOnInit(): void{
    this.menuItems = [
      {link: '/estados', text: 'Estados'},
      {link: '/cidades', text: 'Cidades'},
      {link: '/contatos', text: 'Contatos'},
      {link: '/clientes', text: 'Clientes'},
      {link: '/acordos', text: 'Acordos'},
      {link: '/guias', text: 'Guias de Pagamentos'}
    ]
  }
}