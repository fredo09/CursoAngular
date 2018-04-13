import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectiva-if',
  templateUrl: './ejdirectiva-if.component.html',
  styleUrls: ['./ejdirectiva-if.component.css']
})
export class EjdirectivaIfComponent implements OnInit {
  nombre: String;
  capital: String;
  constructor() { }

  setResultado() {
    return this.capital === 'DF' ? true : false;
  }
  ngOnInit() {
  }

}
