import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IProduct} from './product.model';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api');
  }
}
