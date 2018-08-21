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
  dateNow:number;
  dateResult:number;
  dateLast:Date;
  monthLast:number;
  dayLast:number;
  hoursLast:number;
  minutesLast:number;
  secondsLast:number;

    dateresult (dateNY:number,dateNow:number ): Date {
      this.dateNow = Date.now();
      this.dateResult = (this.dateNY-this.dateNow);
      this.dateLast = new Date(this.dateResult);
      return this.dateLast
    }

  private timerId: number;

  constructor() {
    this.aboutme = new AboutmeClass(
      'Михаил Дергачев',
      new Date(1990, 3, 4),
      'город Краснояск',
      'неоконченное высшее, СибГАУ, "Физика".');

    this.dateLast = this.dateresult(this.dateNY,this.dateNow )
    this.monthLast = this.dateLast.getMonth();
    this.dayLast = this.dateLast.getDay();
    this.hoursLast = this.dateLast.getHours();
    this.minutesLast = this.dateLast.getMinutes();
    this.secondsLast= this.dateLast.getSeconds();

  }

  ngOnInit() {
   this.timerId = setInterval(this.dateresult(this.dateNY,this.dateNow), 1000);


  }
  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
