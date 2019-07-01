import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from 'src/app/products/product-list.component';
import { ProductDetailComponent } from 'src/app/products/product-detail.component';
import {ProductDetailGuard} from 'src/app/products/product-detail.guard';
import {   SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id',  component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
    ]),
  ]
})
export class ProductModule { }
