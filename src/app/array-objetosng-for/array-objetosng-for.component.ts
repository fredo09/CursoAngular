import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-array-objetosng-for',
  templateUrl: './array-objetosng-for.component.html',
  styleUrls: ['./array-objetosng-for.component.css']
})

export class ArrayObjetosngForComponent implements OnInit {
  public alumnos: Array<Alumno> = [
    {id: 2, nombre : 'pepe', apellido : 'vazquez', ciudad : 'comitan'},
    { id: 3, nombre: 'juan', apellido: 'jimenez', ciudad: 'DF' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
