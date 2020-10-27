import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimaryMenuComponent } from './primary-menu/primary-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    PrimaryMenuComponent,
    TopHeaderComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PrimaryMenuComponent,
    TopHeaderComponent,
    ProductItemComponent
  ]
})

export class ComponentsModule { }
