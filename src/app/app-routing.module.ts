import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { CartComponent } from './cart/cart.component';
import { WebsiteComponent } from './website/website.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'home', component : HomeComponent},
  { path: 'admin/product-detail/:id', component : ProductDetailsComponent},
  { path: 'product', component: ProductComponent },
  { path: 'product1', component: Product1Component },
  { path: 'cart', component: CartComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'dashboard', component: DashboradComponent },
  { path: 'admin/add-product', component: AddProductComponent },
  { path: 'admin', component: AdminComponent ,canActivate: [AuthGuard] },
  { path: 'admin/edit-product/:id', component: EditProductComponent },
  { path: 'admin/add-category', component: AddCategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/category/:category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

