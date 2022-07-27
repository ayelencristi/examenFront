import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {Filter, Item, Result} from "../components/interfaces/item.interface";


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private apiURL: string = 'https://api.themoviedb.org/3/movie';
  private apiKey: string = '2925626944a8c97f3cdc608fb886f9cc';

  constructor(private http: HttpClient) { }

  getMovies(page: Filter): Observable<Result> {
    const url = `${this.apiURL}/top_rated?api_key=${this.apiKey}&page=${page}`
    return this.http.get<Result>(url);
  }

}
