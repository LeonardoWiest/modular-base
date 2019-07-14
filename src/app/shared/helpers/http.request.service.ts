import { Observable } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @description
 *
 * Utiliário para execução de requisições HTTP.
 */
@Injectable()
export abstract class HttpRequestServiceHelper extends HttpClient {
  constructor(private _handler: HttpHandler) {
    super(_handler);
  }

  post<T>(): Observable<T> {
    return null;
  }
}
