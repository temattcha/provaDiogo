import { Component } from '@angular/core';
import { Tarefa } from './../../../models/tarefa.model';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tarefa-listarconcluidas',
  templateUrl: './tarefa-listarnaoconcluidas.component.html',
  styleUrls: ['./tarefa-listarnaoconcluidas.component.css']
})
export class TarefaListarnaoconcluidasComponent {
  colunasTabela: string[] = [
    "id",
    "titulo",
    "descricao",
    "status",
    "categoria",
    "criadoEm",
    "alterar",
  ];
  tarefas: Tarefa[] = [];
  
  constructor(private client: HttpClient)
  {

  }

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listarnaoconcluidas")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          console.table(tarefas);
          var tarefasNaoConcluidas = tarefas.filter(x => x.status == "Não iniciada" || x.status == "Em andamento");

          this.tarefas = tarefasNaoConcluidas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

}

