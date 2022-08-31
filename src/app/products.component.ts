import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  template: `
    <div class="content-container">
      <app-list-header title="My List"></app-list-header>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" *ngIf="products$ | async as products">
          <ul class="list">
            <li
              role="presentation"
              *ngFor="
                let product of products;
                trackBy: trackByProduct;
                let i = index
              "
            >
              <div class="card">
                <app-card-content
                  [name]="product.name"
                  [description]="product.description"
                  [imageClass]="product.imageClass"
                ></app-card-content>
                <footer class="card-footer">
                  <app-button-footer
                    class="card-footer-item"
                    [className]="'delete-item'"
                    [iconClasses]="'fas fa-trash'"
                    label="Delete"
                    [item]="product"
                  ></app-button-footer>
                  <app-button-footer
                    class="card-footer-item"
                    [className]="'edit-item'"
                    [iconClasses]="'fas fa-edit'"
                    label="Edit"
                    [item]="product"
                  ></app-button-footer>
                </footer>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = productService.entities$;
  }

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    this.productService.getAll().subscribe((_) => {
      /*.. do nothing for success.. */
    });
  }

  trackByProduct(index: number, product: Product): number {
    return product.id;
  }
}
