import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {
@Input() startStopLog:any;
  constructor() { }

  ngOnInit() {
  }

}
