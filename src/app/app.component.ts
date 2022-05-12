import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  
  user: any = {
    email:"",
    password:""
  }
  num1: number = 0;
  num2: number = 0;

  arrayGeneros: any = [
      "Comédia",
      "Terror",
      "Ação",
      "Drama"
  ]

  operation: string ="";

  model: string = "34";
  generoFilme: string = "";

  ngOnInit(): void {
  }

  showInformations(){
    console.log('Email:', this.user.email );
    console.log('Password:', this.user.password );


    let key = 'Opção 1';

    switch (key) {
      case 'Opção 1':
        break;
      case 'Opção 2':
        break;
      case 'Opção 3':
        break;
      default:
        key = "Opção 4";
        break;
    }






  }

}