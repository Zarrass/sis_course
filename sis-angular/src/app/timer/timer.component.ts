import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
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
    this.dateUpdate(this.dateNY,this.dateNow )
  }


  ngOnInit() {
    this.timerId = setInterval(() => this.dateUpdate(this.dateNY,this.dateNow), 1000);

  }
  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
