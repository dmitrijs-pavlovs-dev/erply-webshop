import {Component, Inject} from '@angular/core';
import {ProductService, IProduct} from './shared/index';
import {ActivatedRoute, Params} from '@angular/router';

import {LocalStorageService} from 'ngx-webstorage';

@Component({
  templateUrl: './cart.component.html',
  styles: [
    `
      mat-toolbar .toolbarItem {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
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
      mat-toolbar div {
        flex-grow: 1;
      }
      mat-toolbar button {
        margin-bottom: 8px;
        margin-left: 10px;
        margin-right: 10px;
      }
    `
  ]
})
export class CartComponent {
  productsInCart: IProduct[];
  constructor(private route: ActivatedRoute, private localSt: LocalStorageService) {}
  ngOnInit() {
    if (this.localSt.retrieve('productsInCart')) {
      this.productsInCart = this.localSt.retrieve('productsInCart');
    }
  }
  addProductToCard(product) {
    this.productsInCart.push(product);
    this.localSt.store('productsInCart', this.productsInCart);
  }
  deleteFromCart(index) {
    var spliceIndex = this.productsInCart.findIndex(element => {
      return element.id === index;
    });
    this.productsInCart.splice(spliceIndex, 1);
    this.localSt.store('productsInCart', this.productsInCart);
  }
}
