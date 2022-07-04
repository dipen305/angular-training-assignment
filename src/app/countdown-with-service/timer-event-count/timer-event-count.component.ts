import { Component, Input, OnInit } from '@angular/core';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-timer-event-count',
  templateUrl: './timer-event-count.component.html',
  styleUrls: ['./timer-event-count.component.scss']
})
export class TimerEventCountComponent implements OnInit {
  constructor(public countDownService:CountdownService) { }

  ngOnInit() {

  }

}
