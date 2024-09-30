import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../components/product/product.component';
import { ProfileComponent } from '../../components/profile/profile.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
