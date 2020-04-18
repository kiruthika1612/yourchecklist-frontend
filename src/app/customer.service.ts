import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  userLogin: boolean = false;

  constructor(private http: HttpClient) { }


  signUp(data): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signup', data).pipe(
      catchError(this.handleError)
    );

  }
  auth(data): Observable<any> {
    return this.http.post<any>('http://localhost:3000/authenticateCustomer', data).pipe(
      tap(
        next => {
          console.log(next);
          this.userLogin = next.status;
        }
      ),
      catchError(this.handleError)
    );


  }
  feedback(data): Observable<any> {
    return this.http.post<any>('https://jb2lrfry56.execute-api.ap-south-1.amazonaws.com/kiru-prod/send-email', data).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
