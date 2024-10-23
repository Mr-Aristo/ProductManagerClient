import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../models/DTOs/CategoryDTO';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private apiUrl = 'https://localhost:5050/api/category'; 

  constructor(private httpService: HttpService) {}

  getAllCategories(): Observable<CategoryDTO[]> {
    return this.httpService.get<CategoryDTO[]>(this.apiUrl);
  }
}
