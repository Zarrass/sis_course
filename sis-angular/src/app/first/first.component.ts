import {Component, Input, OnInit} from '@angular/core';
import {AboutmeClass} from "./aboutme-class";



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  aboutme: AboutmeClass;

  constructor() {
    this.aboutme = new AboutmeClass(
      'Михаил Дергачев',
      new Date(1990, 3, 4),
      'город Краснояск',
      'неоконченное высшее, СибГАУ, "Физика".');




  }

  ngOnInit() {

  }


}
