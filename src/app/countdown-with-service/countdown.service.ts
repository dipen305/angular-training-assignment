import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
startStopLog :any[] = [];
pauseLog:any[]=[];
startCount:number = 0;
pauseCount:number = 0;
timer = new Subject<any>;
currentTimer:number = 0;
timerStarted = new Subject<any>;
constructor() { }
}
