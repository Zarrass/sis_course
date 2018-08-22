import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AboutmeClass} from "./aboutme-class";



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {
  aboutme:AboutmeClass;
  dateNY:number = new Date(2019, 0, 1).getTime();
  dateNow:number;
  dateResult:number;
  dateLast:Date;
  monthLast:number;
  dayLast:number;
  hoursLast:number;
  minutesLast:number;
  secondsLast:number;

    dateUpdate (dateNY:number,dateNow:number ) {
      this.dateNow = Date.now();
      this.dateResult = (this.dateNY-this.dateNow);
      this.dateLast = new Date(this.dateResult);
      this.monthLast = this.dateLast.getMonth();
      this.dayLast = this.dateLast.getDay();
      this.hoursLast = this.dateLast.getHours();
      this.minutesLast = this.dateLast.getMinutes();
      this.secondsLast= this.dateLast.getSeconds();

    }

  private timerId: number;

  constructor() {
    this.aboutme = new AboutmeClass(
      'Михаил Дергачев',
      new Date(1990, 3, 4),
      'город Краснояск',
      'неоконченное высшее, СибГАУ, "Физика".');

    this.dateUpdate(this.dateNY,this.dateNow )


  }

  ngOnInit() {
    this.timerId = setInterval(() => this.dateUpdate(this.dateNY,this.dateNow), 1000);


  }
  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
