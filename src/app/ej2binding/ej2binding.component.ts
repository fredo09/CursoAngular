import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2binding',
  templateUrl: './ej2binding.component.html',
  styleUrls: ['./ej2binding.component.css']
})
export class Ej2bindingComponent implements OnInit {
  texto = 'Texto Original al Cargar';
  constructor() { }

  ngOnInit() {
  }

}
