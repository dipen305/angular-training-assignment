import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from './banner/banner.module';

const routes: Routes = [
  {
    path:'banner',
    loadChildren: ()=> import('./banner/banner.module').then(x => x.BannerModule),
  },
  {
    path:'products',
    loadChildren: ()=> import('./products/products.module').then(x => x. ProductsModule),
  },
  {
    path:'countdown',
    loadChildren: () => import('./countdown/countdown.module').then(x => x.CountdownModule),
  },
  {
    path: 'countdown-with-service',
    loadChildren: () => import('./countdown-with-service/countdown-with-service.module').then(x => x.CountdownWithServiceModule),
  },
  {
    path: 'student-sheet',
    loadChildren: () => import('./student-sheet/student-sheet.module').then(x => x.StudentSheetModule),
  },
  {
    path: 'dynamic-box',
    loadChildren: () => import('./dynamic-box/dynamic-box.module').then(x => x.DynamicBoxModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'banner'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
