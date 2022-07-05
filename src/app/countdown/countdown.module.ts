import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CountdownComponent } from './countdown.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { TimerEventCountComponent } from './timer-event-count/timer-event-count.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:'',
    component:CountdownComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CountdownComponent,
    DisplayTimerComponent,
    TimerControllerComponent,
    ActivityLogComponent,
    TimerEventCountComponent
  ],
  providers:[DatePipe]
})
export class CountdownModule { }
