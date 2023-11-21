import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaListarComponent } from './pages/tarefa/tarefa-listar/tarefa-listar.component';
import { TarefaCadastrarComponent } from './pages/tarefa/tarefa-cadastrar/tarefa-cadastrar.component';
import { TarefaListarconcluidasComponent } from './pages/tarefa/tarefa-listarconcluidas/tarefa-listarconcluidas.component';
import { TarefaListarnaoconcluidasComponent } from './pages/tarefa/tarefa-listarnaoconcluidas/tarefa-listarnaoconcluidas.component';
import { TarefaAlterarComponent } from './pages/tarefa/tarefa-alterar/tarefa-alterar.component';

const routes: Routes = [
  {
    path:"pages/tarefa/listar",
    component: TarefaListarComponent,
  },
  {
    path:"pages/tarefa/cadastrar",
    component: TarefaCadastrarComponent,
  },
  {
    path:"pages/tarefa/listarconcluidas",
    component: TarefaListarconcluidasComponent,
  },
  {
    path:"pages/tarefa/listarnaoconcluidas",
    component: TarefaListarnaoconcluidasComponent,
  },
  {
    path:"pages/tarefa/alterar",
    component: TarefaAlterarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
