import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownWithServiceComponent } from './countdown-with-service.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:CountdownWithServiceComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CountdownWithServiceComponent]
})
export class CountdownWithServiceModule { }
