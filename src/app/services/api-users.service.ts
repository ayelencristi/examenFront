import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BASE_URL} from "../components/config/app";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../components/dominio/User";

export const URL_SERVICE = new InjectionToken<string>('');
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  urlConst: string = BASE_URL + 'users/'
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

  getAll(): Observable<User[]> {
    return this.http
      .get<Array<User>>(this.urlConst)
      .pipe(
        catchError(this.handleException)
      )
  }

  getById(id: number): Observable<User> {
    return this.http
      .get<User>(this.urlConst + id)
  }

  addUser(user: User):Observable<User> {
    return this.http
      .post<User>(this.urlConst,
        user
        ,this.getHttpOptions()
      )
  }

  updateUser(id:number, user:User){
    return this.http
      .put<User>(this.urlConst +  id, user, this.getHttpOptions() );
  }

  deleteUser(id: number){
    return this.http
      .delete(this.urlConst + id)
  }

}




