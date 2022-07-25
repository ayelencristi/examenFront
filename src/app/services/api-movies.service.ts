import {Inject, Injectable, InjectionToken} from '@angular/core';
import {BASE_URL_MOVIES, movies_key} from "../components/config/app";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Item} from "../components/dominio/Item";
import {Result} from "../components/dominio/Result";
import {Filter} from "../components/dominio/Filter";

export const URL_SERVICIO = new InjectionToken<string>(movies_key)
@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  urlConstMovies: string = BASE_URL_MOVIES + 'movie/'
  page:number;
  constructor(private http: HttpClient, @Inject(URL_SERVICIO) private url:string) { }

  getHttpOption() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'api_key' : movies_key
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

  getMovies({page}: Filter): Observable<Result> {
    return this.http
      .get<Result>(`${this.urlConstMovies}/'top_rated?page='/${page}`)
      .pipe(
        catchError(this.handleException)
      )
  }
}
