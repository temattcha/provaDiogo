import { Tarefa } from './../../../models/tarefa.model';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html',
  styleUrls: ['./tarefa-listar.component.css']
})
export class TarefaListarComponent {
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
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          console.table(tarefas);
          this.tarefas = tarefas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

}

