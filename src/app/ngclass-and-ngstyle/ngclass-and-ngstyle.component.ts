import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-and-ngstyle',
  templateUrl: './ngclass-and-ngstyle.component.html',
  styleUrls: ['./ngclass-and-ngstyle.component.css']
})
export class NgclassAndNgstyleComponent implements OnInit {

  // Sobre ngClass
  isRoxo: boolean = false;
  clicou: boolean = false;
  
  // Sobre ngStyle
  tamanhoFonte: number = 18;
  cor: string = "";
  cor2: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
