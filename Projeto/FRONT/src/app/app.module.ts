import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TarefaListarComponent } from './pages/tarefa/tarefa-listar/tarefa-listar.component';
import { TarefaCadastrarComponent } from './pages/tarefa/tarefa-cadastrar/tarefa-cadastrar.component';
import { TarefaAlterarComponent } from './pages/tarefa/tarefa-alterar/tarefa-alterar.component';
import { TarefaListarconcluidasComponent } from './pages/tarefa/tarefa-listarconcluidas/tarefa-listarconcluidas.component';
import { TarefaListarnaoconcluidasComponent } from './pages/tarefa/tarefa-listarnaoconcluidas/tarefa-listarnaoconcluidas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaListarComponent,
    TarefaCadastrarComponent,
    TarefaAlterarComponent,
    TarefaListarconcluidasComponent,
    TarefaListarnaoconcluidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
