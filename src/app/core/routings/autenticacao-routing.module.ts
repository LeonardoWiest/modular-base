import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoPageComponent } from '@core/pages/autenticacao/autenticacao.component';

const routes: Routes = [
  { path: 'autenticacao', component: AutenticacaoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }
