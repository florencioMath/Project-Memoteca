import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Paso informações para o componente Filho',
      autoria: 'Componente Pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorado com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2',
    },
  ];
}
