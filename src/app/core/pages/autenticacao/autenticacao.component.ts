import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BotaoPrimarioComponent } from '@shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from '@shared/components/input-primario/input-primario.component';

@Component({
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoPageComponent implements OnInit {
  @ViewChild('inputLogin', { static: true }) inputLogin: InputPrimarioComponent;

  @ViewChild('inputSenha', { static: true }) inputSenha: InputPrimarioComponent;

  @ViewChild('botaoRealizarLogin', { static: true })
  botaoRealizarLogin: BotaoPrimarioComponent;

  formGroupAutenticacao: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formGroupAutenticacao = this.formBuilder.group({
      email: '',
      senha: ''
    });
  }
}
