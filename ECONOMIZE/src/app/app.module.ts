import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GastosComponent } from './gastos/gastos.component';
import { DespesasComponent } from './despesas/despesas.component';
import { MetasComponent } from './metas/metas.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    DespesasComponent,
    MetasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
