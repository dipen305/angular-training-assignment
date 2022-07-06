import { Component } from "@angular/core";
import { CountdownService } from "../../shared/services/countdown.service";

@Component({
  selector: "app-activity-log",
  templateUrl: "./activity-log.component.html",
  styleUrls: ["./activity-log.component.scss"],
})
export class ActivityLogComponent {
  constructor(public countDownService: CountdownService) {}
}
