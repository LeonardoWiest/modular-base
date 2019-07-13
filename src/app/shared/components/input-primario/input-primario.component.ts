import { Component, Input } from '@angular/core';

@Component({
  selector: 'wbs-input-primario',
  templateUrl: './input-primario.component.html',
  styleUrls: ['./input-primario.component.scss']
})
/**
 *  @description
 *
 * Este é um componente baseado em input com várias propriedades do input nativo.
 *
 */
export class InputPrimarioComponent {
  private _placeholder? = '';

  /**
   * @optional
   *
   * @description
   *
   * Mensagem que aparecerá enquanto o input não estiver preenchido.
   *
   * @default ''
   */
  @Input('wbs-placeholder') set placeholder(valor: string) {
    this._placeholder = valor || '';
  }

  get placeholder() {
    return this._placeholder;
  }
}
