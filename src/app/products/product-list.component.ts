import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {IProduct, PagerService} from './shared';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from './common/toastr.service';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  availableStores: string[] = ['All'];
  filterByStore: string = 'All';
  filterByAvailability: boolean = false;

  pager: any = {};

  pagedItems: any[];
  products: IProduct[];
  productsInCart: IProduct[] = [];

  visibleProducts: IProduct[] = [];

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private pagerService: PagerService,
    private localSt: LocalStorageService
  ) {}
  ngOnInit() {
    this.products = this.route.snapshot.data['products'];

    if (this.localSt.retrieve('productsInCart')) {
      this.productsInCart = this.localSt.retrieve('productsInCart');
    }

    this.products.map(product => {
      if (
        !this.availableStores.find(function(element) {
          return element === product.store;
        })
      ) {
        this.availableStores.push(product.store);
      }
    });

    this.filterProductsByStore(this.filterByStore);
    this.filterProductsByAvailability(this.filterByAvailability);
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.visibleProducts.length, page);

    this.pagedItems = this.visibleProducts.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  addProductToCard(product) {
    if (product.instock) {
      this.productsInCart.push(product);
      this.localSt.store('productsInCart', this.productsInCart);

      this.toastr.success(product.name + ' added to cart !');
    } else {
      this.toastr.error(product.name + ' not in stock!');
    }
  }
  applyFilters1(event) {
    this.filterByStore = event.value;

    if (this.products) {
      this.filterProductsByStore(this.filterByStore);
      this.filterProductsByAvailability(this.filterByAvailability);
    }
  }
  applyFilters2(event) {
    this.filterByAvailability = event.checked;
    if (this.products) {
      this.filterProductsByStore(this.filterByStore);
      this.filterProductsByAvailability(this.filterByAvailability);
    }
  }
  filterProductsByAvailability(filter) {
    if (filter) {
      this.visibleProducts = this.visibleProducts.filter(product => {
        return product.instock === filter;
      });
    }
    this.setPage(1);
  }
  filterProductsByStore(filter) {
    if (filter === 'All') {
      this.visibleProducts = this.products.slice(0);
    } else {
      this.visibleProducts = this.products.filter(product => {
        return product.store === filter;
      });
    }
  }
}
