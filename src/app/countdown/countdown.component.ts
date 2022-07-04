import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  timerLimit!: number;
  interval: any;
  startStopLog: string[] = [];
  pauseLog: string[] = [];
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private datePipe: DatePipe) { }

  ngOnInit() { }
  startTimer(event: any) {
    console.log(this.timerLimit)
    console.log(event.timerLimit)
    console.log(event.timerLimit != undefined)
  if((this.timerLimit != null && this.timerLimit != undefined) || (event.timerLimit != null && event.timerLimit != undefined)){
    if (this.timerLimit == null) {
      this.timerLimit = event.timerLimit;
      console.log('first time triggered');
      this.startInterval('');
    } else if (event.timerLimit != null) {
      this.timerLimit = event.timerLimit;
      this.stopInterval('reset');
      this.startStopLog = [];
      this.pauseLog = [];
      this.startCount = 0;
      this.pauseCount = 0;
      this.startInterval('reset');
    }
    else if (this.timerLimit >= 0 && event.startTimer) {
      this.startInterval('');
    } else if (this.timerLimit >= 0 && !event.timerStarted) {
      this.stopInterval('');
    }
  }
}

  startInterval(message: any) {
    if (message == 'reset') {
      this.startCount = 1;
      this.pauseCount = 0;
    } else {
      this.startCount++;
    }
    let date = new Date();
    this.startStopLog.push('Started at ' + this.datePipe.transform(date, 'dd-MM-yyyy hh:mm:ss a'));
    this.interval = setInterval(() => {
      this.timerLimit--
      if (this.timerLimit <= 0) {
        this.stopInterval('finish');
      }
    }, 1000)
  }
  stopInterval(message: any) {
    let date = new Date();
    let prefix = 'Paused at '

    if (message != 'finish'){
      this.pauseCount++;
      this.pauseLog.push(prefix + this.timerLimit);
    }
    if (message == 'finish')
      prefix = 'Finished at '
    this.startStopLog.push(prefix + this.datePipe.transform(date, 'dd-MM-yyyy hh:mm:ss a'));
    clearInterval(this.interval);
  }
}
