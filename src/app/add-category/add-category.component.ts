import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../interface/category';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductServiceService,private router: Router) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value;
      this.productService.addCategory(category).subscribe(() => {
           alert('Thêm thành công');
           this.router.navigate(['/admin'])
      });
    }
  }
}
