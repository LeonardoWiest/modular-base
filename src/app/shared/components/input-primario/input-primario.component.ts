import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'wbs-input-primario',
  templateUrl: './input-primario.component.html',
  styleUrls: ['./input-primario.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
/**
 *  @description
 *
 * Este é um componente baseado em input com várias propriedades do input nativo.
 *
 */
export class InputPrimarioComponent {
  private _defaultMaxlength = 32;

  private _placeholder?= '';

  private _maxlength?= this._defaultMaxlength;

  private _formControlName?;

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

  /**
   * @optional
   *
   * @description
   *
   * Indica a quantidade máxima de caracteres que o input aceita.
   *
   * @default 32
   */
  @Input('wbs-maxlength') set maxlength(valor: number) {
    this._maxlength = !isNaN(parseInt(<any>valor, 10))
      ? parseInt(<any>valor, 10)
      : this._defaultMaxlength;
  }

  get maxLength() {
    return this._maxlength;
  }

  /**
   * @optional
   *
   * @description
   *
   */
  @Input('wbs-formControlName') set formControlName(valor: string) {
    this._formControlName = valor;
  }

  get formControlName() {
    return this._formControlName;
  }
}
