import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectiva-style',
  templateUrl: './ejdirectiva-style.component.html',
  styleUrls: ['./ejdirectiva-style.component.css']
})
export class EjdirectivaStyleComponent implements OnInit {
  puntuacion: number;
  constructor() { }

  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }
  // tslint:disable-next-line:no-trailing-whitespace
  
  ngOnInit() {
  }

}
