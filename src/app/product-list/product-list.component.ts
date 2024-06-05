import { Component, OnInit  } from '@angular/core';
import { Product } from '../../../interface/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.Get_All_Products().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmDelete) {
      this.productService.Delete_Product(id).subscribe(() => {
        this.fetchProducts();
      });
    }
  }
}
