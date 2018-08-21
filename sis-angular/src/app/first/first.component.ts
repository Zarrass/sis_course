import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AboutmeClass} from "./aboutme-class";



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  aboutme:AboutmeClass;
  dateNY:number = new Date(2019, 0, 1).getTime();
  dateNow:number = Date.now();
  dateResult:number = (this.dateNY-this.dateNow);
  dateLast:Date = new Date(this.dateResult);
  monthLast:number = this.dateLast.getMonth();
  dayLast:number = this.dateLast.getDay();
  hoursLast:number = this.dateLast.getHours();
  minutesLast:number= this.dateLast.getMinutes();
  secondsLast:number= this.dateLast.getSeconds();

  private timerId: number;

  constructor() {
    this.aboutme = new AboutmeClass(
      'Михаил Дергачев',
      new Date(1990, 3, 4),
      'город Краснояск',
      'неоконченное высшее, СибГАУ, "Физика".')
  }

  ngOnInit() {
    this.timerId = setInterval(() => this.dateResult--, 1000);


  }
  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
