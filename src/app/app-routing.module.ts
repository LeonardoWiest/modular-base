import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoPageComponent } from './core/pages/autenticacao/autenticacao.component';

const routes: Routes = [
  {
    path: '',
    component: AutenticacaoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
