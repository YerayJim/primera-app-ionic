import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {
    console.log("Hola Mundo en Ionic UwU");

    let numero = 10;
    debugger;
    numero = 20;
    numero = 30;
    numero = 40;
    numero = 50;

    console.log("La Variable esta Tomando este Valor: " + numero);
    
  }
}


