import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(ptBr);
@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
