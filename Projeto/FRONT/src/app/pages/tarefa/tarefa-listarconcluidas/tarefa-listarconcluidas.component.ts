import { Component } from '@angular/core';
import { Tarefa } from './../../../models/tarefa.model';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tarefa-listarconcluidas',
  templateUrl: './tarefa-listarconcluidas.component.html',
  styleUrls: ['./tarefa-listarconcluidas.component.css']
})
export class TarefaListarconcluidasComponent {
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
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listarconcluidas")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          console.table(tarefas);
          var tarefasConcluidas = tarefas.filter(x => x.status == "Concluída");

          this.tarefas = tarefasConcluidas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

}

