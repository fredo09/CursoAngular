import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivang-switch',
  templateUrl: './ejdirectivang-switch.component.html',
  styleUrls: ['./ejdirectivang-switch.component.css']
})
export class EjdirectivangSwitchComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  
  jugadores: any = [
  {nombre: 'messi', equipo: 'FCBARCELONA'},
  {nombre: 'cristiano ronaldo', equipo: 'FCMADRIL' },
  { nombre: 'andrea pirlo', equipo: 'FCJUVENTUS' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
