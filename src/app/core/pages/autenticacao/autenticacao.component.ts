import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BotaoPrimarioComponent } from 'src/app/shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from 'src/app/shared/components/input-primario/input-primario.component';
import { AutenticacaoService } from '../../services/autenticacao.service';

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
  ) { }

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
