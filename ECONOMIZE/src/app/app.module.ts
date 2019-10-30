import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControledegastosComponent } from './controledegastos/controledegastos.component';
import { MetasComponent } from './metas/metas.component';
import { DespesasComponent } from './despesas/despesas.component';

@NgModule({
  declarations: [
    AppComponent,
    ControledegastosComponent,
    MetasComponent,
    DespesasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
