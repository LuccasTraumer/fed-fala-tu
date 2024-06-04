import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listItens: any = [
    {
      number: 'FIG-211',
      street: 'Rota Vila Brandina',
      link: 'TODO'
    },
    {
      number: 'FIG-281',
      street: 'Rota São Fernando',
      link: 'TODO'
    },
    {
      number: 'FIG-251',
      street: 'Rota Vila Industrial',
      link: 'TODO'
    },
    {
      number: 'FIG-221',
      street: 'Rota Jardim Miryam',
      link: 'TODO'
    }
  ];

}
