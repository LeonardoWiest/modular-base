import { BotaoPrimarioComponent } from 'src/app/shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from 'src/app/shared/components/input-primario/input-primario.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [InputPrimarioComponent],
  exports: [
    CommonModule,
    FormsModule,
    InputPrimarioComponent,
    BotaoPrimarioComponent
  ]
})
export class SharedModule {}
