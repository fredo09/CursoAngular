import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
   public hijo: String = 'Este Proviene del componente hijo';

  @Input() aviso: String;

  constructor() { }

  ngOnInit() {
  }

}
