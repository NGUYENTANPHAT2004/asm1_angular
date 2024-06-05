import { Component, OnInit  } from '@angular/core';
import { Product } from '../../../interface/product';
import { Category } from '../../../interface/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];
  products:Product[] = []

  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      desc: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productdata : Product = this.productForm.value as Product ;
      this.productService.add_Product(productdata).subscribe(data=>{
        alert('Thêm thành công')
        this.products.push(data)
        this.router.navigate(['/admin'])
    })
    }
  }
}
