import { Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' }, // Eğer ana sayfa boşsa products yoluna yönlendir
  { path: 'products', component: ProductComponent }, // ProductComponent için yönlendirme
  // Diğer yönlendirmeler buraya eklenebilir
];
