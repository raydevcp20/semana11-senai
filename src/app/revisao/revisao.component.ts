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
