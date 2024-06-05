import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { Product1Component } from './product1/product1.component';
import { CartComponent } from './cart/cart.component';
import { WebsiteComponent } from './website/website.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContainerHomeComponent,
    FooterComponent,
    ProductComponent,
    ProductContainerComponent,
    Product1Component,
    CartComponent,
    WebsiteComponent,
    DashboradComponent,
    AddProductComponent,
    ProductListComponent,
    AdminComponent,
    AddCategoryComponent,
    EditProductComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
