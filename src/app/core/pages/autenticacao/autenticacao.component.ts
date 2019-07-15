import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '@core/services/autenticacao.service';
import { BotaoPrimarioComponent } from '@shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from '@shared/components/input-primario/input-primario.component';

@Component({
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoPageComponent implements OnInit {
  @ViewChild('inputEmail', { static: true }) inputEmail: InputPrimarioComponent;

  @ViewChild('inputSenha', { static: true }) inputSenha: InputPrimarioComponent;

  @ViewChild('botaoRealizarLogin', { static: true })
  botaoRealizarLogin: BotaoPrimarioComponent;

  formGroupAutenticacao: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit() {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formGroupAutenticacao = this.formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      senha: ['', Validators.required]
    });
  }

  clickAutenticar = () =>
    this.autenticacaoService
      .realizarLogin(this.formGroupAutenticacao.value)
      .subscribe(retorno => {
        console.log(retorno.token);
      });
}
