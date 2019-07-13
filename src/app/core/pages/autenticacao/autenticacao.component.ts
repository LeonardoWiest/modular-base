import { InputPrimarioComponent } from 'src/app/shared/components/input-primario/input-primario.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoPageComponent {
  @ViewChild('inputLogin', { static: true }) inputLogin: InputPrimarioComponent;

  @ViewChild('inputSenha', { static: true }) inputSenha: InputPrimarioComponent;

  constructor() {}
}
