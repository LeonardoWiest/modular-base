import { AutenticacaoPageComponent } from 'src/app/core/pages/autenticacao/autenticacao.component';
import { AutenticacaoRoutingModule } from 'src/app/core/routings/autenticacao-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        AutenticacaoRoutingModule
    ],
    declarations: [AutenticacaoPageComponent],
    exports: [AutenticacaoPageComponent]
})
export class AutenticacaoModule { }
