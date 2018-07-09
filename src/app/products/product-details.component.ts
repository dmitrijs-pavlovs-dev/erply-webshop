import {Component, Inject} from '@angular/core';
import {IProduct} from './shared/index';
import {ActivatedRoute, Params} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  templateUrl: './product-details.component.html',
  styles: [
    `
      mat-toolbar .toolbarItem {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      mat-card {
        margin-top: 20px;
      }
      mat-toolbar div {
        flex-grow: 1;
      }
      mat-toolbar {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 10px;
        height: auto;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      mat-toolbar button {
        margin-bottom: 8px;
        margin-left: 10px;
        margin-right: 10px;
      }
    `
  ]
})
export class ProductDetailsComponent {
  product: IProduct;
  products: IProduct[];
  productsInCart: IProduct[] = [];
  id: number;
  constructor(private route: ActivatedRoute, private localSt: LocalStorageService) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.forEach((params: Params) => {
      this.products = this.route.snapshot.data['products'];
      this.products.map(product => {
        if (product.id == this.id) {
          this.product = product;
        }
      });
    });
    if (this.localSt.retrieve('productsInCart')) {
      this.productsInCart = this.localSt.retrieve('productsInCart');
    }
  }
  addProductToCard(product) {
    this.productsInCart.push(product);
    this.localSt.store('productsInCart', this.productsInCart);
  }
}
