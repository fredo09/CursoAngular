import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {
  texto = 'Originalmente el texto de carga asi!';
  constructor() { }

  ngOnInit() {
  }

  modText() {
    this.texto = 'Al pulsar el boton se muestra asi!';
  }
}
