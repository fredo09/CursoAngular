import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {
  cursos = [];
  constructor() {
    this.cursos = ['HTML', 'ANDROID', 'JAVA', 'NODE.JS', 'PHP' ];
   }

  ngOnInit() {
  }

}
