import { DatePipe } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { CountdownService } from "../countdown.service";

@Component({
  selector: "app-timer-controller-with-service",
  templateUrl: "./timer-controller-with-service.component.html",
  styleUrls: ["./timer-controller-with-service.component.scss"],
})
export class TimerControllerWithServiceComponent implements OnInit, OnDestroy {
  timerLimit: any;
  timerStarted: boolean = false;
  interval: any;
  currentTimer: any;
  constructor(
    public countDownService: CountdownService,
    private datePipe: DatePipe
  ) {}
  ngOnInit() {}
  startPauseClick() {
    if (this.timerLimit > 0) {
      this.timerStarted = true;
    } else {
      this.timerStarted = !this.timerStarted;
    }
    this.startTimer();
  }

  startTimer() {
    if (
      (this.timerLimit != null && this.timerLimit != undefined) ||
      (this.currentTimer != null && this.currentTimer != undefined)
    ) {
      if (this.currentTimer == null || this.currentTimer == undefined) {
        this.countDownService.currentTimer = this.timerLimit;
        this.currentTimer = this.timerLimit;
        this.timerLimit = null;
        this.startInterval("");
      } else if (this.timerLimit != null) {
        this.currentTimer = this.timerLimit;
        this.countDownService.currentTimer = this.timerLimit;
        this.timerLimit = null;
        this.stopInterval("reset");
        this.countDownService.startStopLog = [];
        this.countDownService.pauseLog = [];
        this.countDownService.startCount = 0;
        this.countDownService.pauseCount = 0;
        this.startInterval("reset");
      } else if (this.currentTimer >= 0 && this.timerStarted) {
        this.startInterval("");
      } else if (this.currentTimer >= 0 && !this.timerStarted) {
        this.stopInterval("");
      }
    }
  }

  startInterval(message: any) {
    if (message == "reset") {
      this.countDownService.startCount = 1;
      this.countDownService.pauseCount = 0;
    } else {
      this.countDownService.startCount++;
    }
    let date = new Date();
    this.countDownService.startStopLog.push(
      "Started at " + this.datePipe.transform(date, "dd-MM-yyyy hh:mm:ss a")
    );
    this.interval = setInterval(() => {
      this.currentTimer--;
      this.countDownService.currentTimer = this.currentTimer;

      if (this.currentTimer <= 0) {
        this.stopInterval("finish");
      }
    }, 1000);
  }
  stopInterval(message: any) {
    let date = new Date();
    let prefix = "Paused at ";

    if (message != "finish") {
      this.countDownService.pauseCount++;
      this.countDownService.pauseLog.push(prefix + this.currentTimer);
    }
    if (message == "finish") prefix = "Finished at ";
    this.countDownService.startStopLog.push(
      prefix + this.datePipe.transform(date, "dd-MM-yyyy hh:mm:ss a")
    );
    clearInterval(this.interval);
  }
  reset() {
    this.stopInterval("reset");
    this.countDownService.currentTimer = 0;
    this.countDownService.startStopLog = [];
    this.countDownService.pauseLog = [];
    this.countDownService.startCount = 0;
    this.countDownService.pauseCount = 0;
  }
  ngOnDestroy(): void {
    this.reset();
  }
}
