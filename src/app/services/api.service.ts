import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Product} from "../components/interfaces/Product";
import {Seller} from "../components/interfaces/Seller";
import {Sale} from "../components/interfaces/Sale";

export const URL_SERVICE = new InjectionToken<string>('');
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlConst: string = 'http://localhost:8080';
  constructor(private http: HttpClient, @Inject(URL_SERVICE) private url:string) { }
  getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  handleException(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("Error de http front " + error.error.message)
    } else {
      console.log("Error de http back: "  +error.error.message + ' ' + error.error.status)
    }
    return throwError('Error de comunicación')
  }

  //REQUEST PRODUCTO

  getAllProducts(): Observable<Product> {
    return this.http
      .get<Product>(this.urlConst + '/product')
      .pipe(
        catchError(this.handleException)
      )
  }

  // getById(id: number): Observable<User> {
  //   return this.http
  //     .get<User>(this.urlConst + id)
  // }

  addProduct(product: Product):Observable<Product> {
    return this.http
      .post<Product>(this.urlConst + '/product',
        product
        ,this.getHttpOptions()
      )
  }

  updateProduct(product: Product){
    return this.http
      .put<Product>(this.urlConst + '/product', product, this.getHttpOptions() );
  }


  // REQUEST VENDEDORES

  getAllSellers(): Observable<Seller> {
    return this.http
      .get<Seller>(this.urlConst + '/seller')
      .pipe(
        catchError(this.handleException)
      )
  }

  //REQUEST VENTAS

  getAllSales(): Observable<Sale> {
    return this.http
      .get<Sale>(this.urlConst + '/sale')
      .pipe(
        catchError(this.handleException)
      )
  }

  addSale(sale: Sale): Observable<Sale> {
    console.log(sale)
    return this.http
      .post<Sale>(this.urlConst + '/sale',
        sale,
        this.getHttpOptions()
      )
  }

  getSaleById(id: number): Observable<Sale> {
    return this.http
      .get<Sale>(this.urlConst + id)
  }
}
