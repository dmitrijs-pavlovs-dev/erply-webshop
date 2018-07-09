import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {IProduct} from './product.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductService {
  private apiUrl = 'https://erply-challenge.herokuapp.com/';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    let options = {
      headers: new HttpHeaders({
        AUTH: 'fae7b9f6-6363-45a1-a9c9-3def2dae206d',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<IProduct[]>(this.apiUrl + '/list', options);
  }
}
