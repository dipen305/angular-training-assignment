import { DatePipe } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { CountdownService } from "../../shared/services/countdown.service";

@Component({
  selector: "app-timer-controller-with-service",
  templateUrl: "./timer-controller-with-service.component.html",
  styleUrls: ["./timer-controller-with-service.component.scss"],
})
export class TimerControllerWithServiceComponent implements OnDestroy {
  timerLimit: any;
  constructor(
    public countDownService: CountdownService,
  ) {}
  startPauseClick() {
    if (this.timerLimit > 0) {
      this.countDownService.timerStarted = true;
    } else {
      this.countDownService.timerStarted = !this.countDownService.timerStarted;
    }
    this.countDownService.timerHandler(this.timerLimit,this.countDownService.currentTimer);
    this.timerLimit = null;
  }
  ngOnDestroy(): void {
    this.countDownService.reset();
  }
  reset(){
    this.countDownService.reset();
  }
}
