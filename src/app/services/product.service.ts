import { Injectable } from '@angular/core';
import { ProductDTO } from '../models/DTOs/ProductDTO';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = 'https://localhost:5050/api/product';
  constructor(private httpService: HttpService) { }

  getAllProducts(): Observable<ProductDTO[]> {
    return this.httpService.get<ProductDTO[]>(this.apiUrl);
  }

  getAllProductsWithCategory(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.apiUrl}/getall-with-category`);
  }

  getProductById(id: string): Observable<ProductDTO> {
    return this.httpService.get<ProductDTO>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: ProductDTO): Observable<any> {
    return this.httpService.post<any>(this.apiUrl, product);
  }

  updateProduct(id: string, product: ProductDTO): Observable<any> {
    return this.httpService.put<any>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpService.delete<any>(`${this.apiUrl}/${id}`);
  }
}
