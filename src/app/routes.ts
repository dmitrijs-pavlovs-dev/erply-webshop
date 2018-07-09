import { Routes } from '@angular/router';
import { ProductListComponent, ProductListResolver, ProductDetailsComponent, CartComponent } from './products/index';

export const appRoutes: Routes = [
  { path: 'products', component: ProductListComponent, resolve: { products: ProductListResolver } },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent, resolve: { products: ProductListResolver } },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
