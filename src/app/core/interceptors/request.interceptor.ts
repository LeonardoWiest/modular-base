import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export abstract class RequestInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneRequest = request.clone();

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) =>
        event instanceof HttpResponse
          ? () => this.processarResponseSucesso(event)
          : event
      ),
      catchError((error: HttpErrorResponse) =>
        this.processarResponseFalha(error, cloneRequest)
      )
    );
  }
  private processarResponseSucesso(response: HttpResponse<any>) { }

  private processarResponseFalha(
    response: HttpErrorResponse,
    request: HttpRequest<any>
  ) {
    return throwError(response.error);
  }
}
