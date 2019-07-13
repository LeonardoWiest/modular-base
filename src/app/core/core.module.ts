import { AutenticacaoPageComponent } from 'src/app/core/pages/autenticacao/autenticacao.component';
import { BotaoPrimarioComponent } from 'src/app/shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from 'src/app/shared/components/input-primario/input-primario.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AutenticacaoPageComponent,
    InputPrimarioComponent, //TODO Necessário por causa da página de Autenticação. Ver para alterar.
    BotaoPrimarioComponent //TODO Necessário por causa da página de Autenticação. Ver para alterar.
  ],
  exports: [BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  entryComponents: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule já foi carregado. Importe o CoreModule somente no AppModule.'
      );
    }
  }
}
