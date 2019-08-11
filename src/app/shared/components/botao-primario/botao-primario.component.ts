import { Component, Input } from '@angular/core';

@Component({
  selector: 'stone-botao-primario',
  templateUrl: './botao-primario.component.html',
  styleUrls: ['./botao-primario.component.scss']
})
/**
 *  @description
 *
 * Este é um componente baseado em button com várias propriedades do button nativo.
 *
 */
export class BotaoPrimarioComponent {
  /**
   * @optional
   *
   * @description
   *
   * Label do botão.
   */
  @Input('stone-label') label?;
}
