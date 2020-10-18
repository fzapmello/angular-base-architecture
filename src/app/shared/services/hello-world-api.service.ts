import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldApiService {

  private END_POINT = 'hello-world';
  private _URL_HELLO_WORLD = environment.urlBackend + this.END_POINT;

  constructor(private http: HttpClient) {
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  getHelloWorld(): Observable<any> {
    const url = `${this._URL_HELLO_WORLD}`;

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(url,{ headers, responseType: 'text'});




    return this.http.get<Array<any>>(url, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
