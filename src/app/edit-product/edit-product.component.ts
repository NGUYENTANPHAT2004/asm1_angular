import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../interface/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../interface/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];
  productId?: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService,
    private route: ActivatedRoute,
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
    this.productId = this.route.snapshot.params['id'];
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    if (this.productId) {
      this.productService.Get_Product_By_ID(this.productId).subscribe(product => {
        this.productForm.setValue({
          name: product.name,
          category: product.category,
          price: product.price,
          desc: product.desc
        });
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid && this.productId) {
      const productData: Product = this.productForm.value;
      this.productService.Update_Product(this.productId, productData).subscribe(() => {
        alert('Sửa thành công');
        this.router.navigate(['/admin']);
      });
    }
  }
}
