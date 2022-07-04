import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {
    path:'',
    component:BannerComponent
  }
]
@NgModule({

  declarations: [BannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BannerModule { }
