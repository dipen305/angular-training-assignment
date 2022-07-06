import { DatePipe } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent implements OnDestroy {
  timerLimit: number = 0;
  interval: any;
  startStopLog: string[] = [];
  pauseLog: string[] = [];
  startCount: number = 0;
  pauseCount: number = 0;
  errorMessage:string = '';
  constructor(private datePipe: DatePipe) {}

  startTimer(event: any) {
    this.errorMessage = '';
    if (
      (this.timerLimit != 0 && this.timerLimit != undefined) ||
      (event.timerLimit != null && event.timerLimit != undefined)
    ) {
      if (this.timerLimit == null || this.timerLimit ==0) {
        this.timerLimit = event.timerLimit;
        this.startInterval("");
      } else if (event.timerLimit != null) {
        this.timerLimit = event.timerLimit;
        this.stopInterval("reset");
        this.startStopLog = [];
        this.pauseLog = [];
        this.startCount = 0;
        this.pauseCount = 0;
        this.startInterval("reset");
      } else if (this.timerLimit >= 0 && event.isTimerRunning) {
        this.startInterval("");
      } else if (this.timerLimit >= 0 && !event.isTimerRunning) {
        this.stopInterval("");
      }
    } else {
      this.errorMessage = 'Please enter timer limit';
    }
  }

  startInterval(message: any) {
    if (message == "reset") {
      this.startCount = 1;
      this.pauseCount = 0;
    } else {
      this.startCount++;
    }
    let date = new Date();
    this.startStopLog.push(
      "Started at " + this.datePipe.transform(date, "dd-MM-yyyy hh:mm:ss a")
    );
    this.interval = setInterval(() => {
      this.timerLimit--;
      if (this.timerLimit <= 0) {
        this.stopInterval("finish");
      }
    }, 1000);
  }
  stopInterval(message: any) {
    let date = new Date();
    let prefix = "Paused at ";

    if (message != "finish") {
      this.pauseCount++;
      this.pauseLog.push(prefix + this.timerLimit);
    }
    if (message == "finish") prefix = "Finished at ";
    this.startStopLog.push(
      prefix + this.datePipe.transform(date, "dd-MM-yyyy hh:mm:ss a")
    );
    clearInterval(this.interval);
  }

  reset() {
    this.stopInterval('reset');
    this.timerLimit = 0
    this.startStopLog = [];
    this.pauseLog = [];
    this.startCount = 0;
    this.pauseCount = 0;
  }
  ngOnDestroy(): void {
    this.reset();
  }
}
