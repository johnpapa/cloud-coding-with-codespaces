import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ProductsComponent },
];
