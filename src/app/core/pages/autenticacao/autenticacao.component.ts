import { BotaoPrimarioComponent } from 'src/app/shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from 'src/app/shared/components/input-primario/input-primario.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoPageComponent implements OnInit {
  @ViewChild('inputLogin', { static: true }) inputLogin: InputPrimarioComponent;

  @ViewChild('inputSenha', { static: true }) inputSenha: InputPrimarioComponent;

  @ViewChild('botaoRealizarLogin', { static: true })
  botaoRealizarLogin: BotaoPrimarioComponent;

  autenticacaoForm: FormGroup;

  autenticacaoDTO = {
    login: '',
    senha: ''
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.autenticacaoForm = this.formBuilder.group({
      login: [
        this.autenticacaoDTO.login,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(40)
        ])
      ],
      senha: [
        this.autenticacaoDTO.senha,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(32)
        ])
      ]
    });
  }

  clickAutenticar = () => this.validarCredenciais();

  validarCredenciais() {
    if (this.autenticacaoForm.invalid) {
    }
  }
}
