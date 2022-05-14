import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.component.html',
  styleUrls: ['./revisao.component.css']
})
export class RevisaoComponent implements OnInit {

  user: any = {
    email:"",
    password:"",
    logged:false
  }
  notEmail: boolean = false;
  regex: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  users: any = [
    {
      primeiroNome: "Ray",
      ultimo:"Silva"
    },
    {
      primeiroNome: "João",
      ultimo:"Fernando"
    },
    {
      primeiroNome: "Raquel",
      ultimo:"Oliveira"
    },
    {
      primeiroNome: "Tulio",
      ultimo:"Bastos"
    }
  ]
  primeiroNome="";
  segundoNome="";

  indexAtual: number =0;
  editandoUser: boolean = false;

  getUser(index: number){
    console.log(index)
    this.users.splice(index, 1)
  }

  editUser(user:any, index:number){
    this.primeiroNome = user.primeiroNome;
    this.segundoNome = user.ultimo;
    this.indexAtual = index;
    this.editandoUser = true;
  }

  editingUser(){
    this.users[this.indexAtual].primeiroNome = this.primeiroNome;
    this.users[this.indexAtual].ultimo = this.segundoNome;
    this.editandoUser = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
  validateEmail(){
    if(!this.regex.test(this.user.email)){
      this.notEmail = true;
    }else{
      this.notEmail = false;
    }
  }
  sendUser(){
    if(!this.regex.test(this.user.email) || this.user.password < 6){
      console.log("Não aceito");
    }else{
      console.log("aceito");
    }
  }





}
