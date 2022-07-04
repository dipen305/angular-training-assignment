import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSheetComponent } from './student-sheet.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {
    path:'',
    component:StudentSheetComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentSheetComponent]
})
export class StudentSheetModule { }
