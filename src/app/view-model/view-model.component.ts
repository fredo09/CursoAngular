import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-view-model',
  templateUrl: './view-model.component.html',
  styleUrls: ['./view-model.component.css']
})
export class ViewModelComponent implements OnInit {
  estudiante1 = new Alumno(1, 'Fredy', 'Vazquez', 'Comitan de Dominguez');
  constructor() { }

  ngOnInit() {
  }

}
