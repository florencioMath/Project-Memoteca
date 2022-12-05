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
    {
      conteudo:
        'To see a World in a Grain of Sand, And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand, And Eternity in an hour, A Robin Red breast in a Cage, Puts all Heaven in a Rage, A Dove house filld with Doves & Pigeons, Shudders Hell thr all its regions ',
      autoria: 'Auguries of Innocence by Wiliam Blake',
      modelo: 'modelo3',
    },
  ];
}
