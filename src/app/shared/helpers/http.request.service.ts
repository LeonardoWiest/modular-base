import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @description
 *
 * Utiliário para execução de requisições HTTP.
 */
@Injectable()
export abstract class HttpRequestServiceHelper {
  constructor(private http: HttpClient) {}
}
