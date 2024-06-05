import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrl: './dashborad.component.css'
})
export class DashboradComponent {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
    });
  }
}
