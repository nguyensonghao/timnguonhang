import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    SlickCarouselModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
  ]
})

export class HomeModule { }
