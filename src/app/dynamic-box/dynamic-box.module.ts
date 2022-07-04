import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicBoxComponent } from './dynamic-box.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:DynamicBoxComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  
  ],
  declarations: [DynamicBoxComponent]
})
export class DynamicBoxModule { }
