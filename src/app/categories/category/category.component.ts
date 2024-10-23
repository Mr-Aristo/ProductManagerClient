import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; // Adjust the import path as necessary
import { CategoryService } from '../../services/category.service'; // Adjust the import path as necessary
import { CategoryDTO } from '../../models/DTOs/CategoryDTO'; // Adjust the import path as necessary
import { ProductDTO } from '../../models/DTOs/ProductDTO'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category',
  templateUrl: './category.component.html',
  imports:[CommonModule]
})
export class CategoryComponent implements OnInit {
  products: ProductDTO[] = [];
  categories: CategoryDTO[] = []; // Array to hold the categories

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories(); // Load categories when the component initializes
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (data: CategoryDTO[]) => {
        this.categories = data;
        console.log('Categories loaded', this.categories); // For debugging
      },
      (error) => {
        console.error('Error loading categories', error);
      }
    );
  }

  loadProductsWithCategory(): void {
    this.productService.getAllProductsWithCategory().subscribe((data: any[]) => {
      
      console.log('API Response:', data);
      
      this.products = data.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        categoryID: item.category?.id, 
        categoryName: item.category?.name 
      }));
    }, (error) => {
      console.error('Error loading products with category', error); 
    });
  }
  
}
