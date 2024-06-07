// src/app/category/category.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../../../interface/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.productService.getProductsByCategory(this.category).subscribe(products => {
      this.products = products;
    });
  }
}
