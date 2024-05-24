import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { CartComponent } from './cart/cart.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product1', component: Product1Component },
  { path: 'cart', component: CartComponent },
  { path: 'website', component: WebsiteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
