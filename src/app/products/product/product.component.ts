import { Component, OnInit,ViewChild  } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDTO } from '../../models/DTOs/ProductDTO';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';
import { CategoryDTO } from '../../models/DTOs/CategoryDTO';
import { CategoryComponent } from '../../categories/category/category.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,
     NgIf,
     NgFor,
     HttpClientModule,
     CategoryComponent
    ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: ProductDTO[] = [];
  categories: CategoryDTO[] = [];
  newProduct: ProductDTO = { name: '', price: 0, categoryID: '' };
  selectedProduct: ProductDTO | null = null;

 // @ViewChild(CategoryComponent) categoryComponent!: CategoryComponent;
  constructor(private productService: ProductService,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
    //this.categoryComponent.loadCategories();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data: ProductDTO[]) => {
      this.products = data;
    });
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(
      (data: CategoryDTO[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error loading categories', error);
      }
    );
  }

  editProduct(product: ProductDTO): void {
    this.selectedProduct = { ...product };
  }

  addProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe({
      next: (response) => {
      
        console.log('Product added successfully:', response);
        this.loadProducts(); 
        this.resetForm();
      },
      error: (error) => {
        console.error('Error adding product:', error);
       
        alert('Failed to add product. Please try again.');
      }
    });
  }
  

  private resetForm(): void {
    this.newProduct = { name: '', price: 0, categoryID: '' };
  }
  
  updateProduct(): void {
    if (this.selectedProduct?.id) {
      this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(() => {
        this.loadProducts();
        this.selectedProduct = null;
      });
    }
  }

  deleteProduct(id: string): void {
    if (id) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
    else {
      console.error('Product ID is undefined');
    }
  }

  cancelEdit(): void {
    this.selectedProduct = null;
  }
}
