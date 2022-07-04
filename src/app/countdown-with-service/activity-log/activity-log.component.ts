import { Component, Input, OnInit } from "@angular/core";
import { CountdownService } from "../countdown.service";

@Component({
  selector: "app-activity-log",
  templateUrl: "./activity-log.component.html",
  styleUrls: ["./activity-log.component.scss"],
})
export class ActivityLogComponent implements OnInit {
  constructor(public countDownService: CountdownService) {}

  ngOnInit() {}
}
