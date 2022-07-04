import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownWithServiceComponent } from './countdown-with-service.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { TimerControllerWithServiceComponent } from './timer-controller/timer-controller-with-service.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { TimerEventCountComponent } from './timer-event-count/timer-event-count.component';
import { FormsModule } from '@angular/forms';
import { CountdownService } from './countdown.service';

const routes:Routes = [
  {
    path:'',
    component:CountdownWithServiceComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CountdownWithServiceComponent,
    DisplayTimerComponent,
    TimerControllerWithServiceComponent,
    ActivityLogComponent,
    TimerEventCountComponent
  ],
  providers: [CountdownService]
})
export class CountdownWithServiceModule { }
