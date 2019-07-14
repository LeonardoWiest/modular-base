import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BotaoPrimarioComponent } from '@shared/components/botao-primario/botao-primario.component';
import { InputPrimarioComponent } from '@shared/components/input-primario/input-primario.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [InputPrimarioComponent, BotaoPrimarioComponent],
  exports: [
    CommonModule,
    FormsModule,
    InputPrimarioComponent,
    BotaoPrimarioComponent
  ]
})
export class SharedModule {}
