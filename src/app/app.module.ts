import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from './routes';
import {WebshopAppComponent} from './webshop-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2Webstorage} from 'ngx-webstorage';
import {PagerService} from './products/shared/pagination.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ProductService,
  ProductListComponent,
  ProductListResolver,
  ProductDetailsComponent,
  MaterialModule,
  CartComponent,
  ToastrService
} from './products/index';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    CartComponent,
    ProductListComponent,
    WebshopAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2Webstorage,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToastrService, ProductListResolver, PagerService, ProductService],
  bootstrap: [WebshopAppComponent]
})
export class AppModule {}
