import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountdownService {
  interval: any;
  startStopLog: any[] = [];
  pauseLog: any[] = [];
  startCount: number = 0;
  pauseCount: number = 0;
  timer = new Subject();
  currentTimer: number = 0;
  timerStarted: boolean = false;
  errorMessage: string = "";
  constructor(private datePipe: DatePipe) { }

  timerHandler(timerLimit: any, currentTimer: any) {
    this.errorMessage = "";
    if (
      (timerLimit != null && timerLimit != undefined && timerLimit != 0) ||
      (currentTimer != null && currentTimer != undefined && currentTimer != 0)
    ) {
      if (
        currentTimer == null ||
        currentTimer == undefined ||
        currentTimer == 0
      ) {
        this.currentTimer = timerLimit;
        this.startTimer("");
      } else if (timerLimit != null) {
        currentTimer = timerLimit;
        this.stopTimer("reset");
        this.startStopLog = [];
        this.pauseLog = [];
        this.startCount = 0;
        this.pauseCount = 0;
        this.startTimer("reset");
      } else if (currentTimer >= 0 && this.timerStarted) {
        this.startTimer("");
      } else if (currentTimer >= 0 && !this.timerStarted) {
        this.stopTimer("");
      }
    } else {
      this.errorMessage = "Please enter timer limit";
    }
  }

  startTimer(message: any) {
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
      this.currentTimer--;
      // this.currentTimer = this.currentTimer;

      if (this.currentTimer <= 0) {
        this.stopTimer("finish");
      }
    }, 1000);
  }
  stopTimer(message: any) {
    let date = new Date();
    let prefix = "Paused at ";

    if (message != "finish") {
      this.pauseCount++;
      this.pauseLog.push(prefix + this.currentTimer);
    }
    if (message == "finish") prefix = "Finished at ";
    this.startStopLog.push(
      prefix + this.datePipe.transform(date, "dd-MM-yyyy hh:mm:ss a")
    );
    clearInterval(this.interval);
  }
  reset() {
    this.stopTimer("reset");
    this.currentTimer = 0;
    this.startStopLog = [];
    this.pauseLog = [];
    this.startCount = 0;
    this.pauseCount = 0;
    this.errorMessage = "";
  }
}
