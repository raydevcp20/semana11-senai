import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-and-ngfor',
  templateUrl: './ngif-and-ngfor.component.html',
  styleUrls: ['./ngif-and-ngfor.component.css']
})
export class NgifAndNgforComponent implements OnInit {
  trocaValor:boolean = true;
  
  list: any = [
    "Levar o lixo pra fora",
    "Lavar os pratos",
    "Comprar a feira",
    "Comprar o pão"  
  ];
  
  alunosWithObject:any = [
    {
      nome:"Julia",
      nota:10
    },
    {
      nome:"Elielson",
      nota:9
    },
    {
      nome:"Filipe",
      nota:4
    },
    {
      nome:"Fabiana",
      nota:10
    },
  ]
  
  password: string = "";
  cpf: string = "";
  
  arrayGeneros: any = [
      "Comédia",
      "Terror",
      "Ação",
      "Drama"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
