import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (sessionStorage.getItem('token')!) {
      const authReq = request.clone({
        headers: request.headers.set('token', sessionStorage.getItem('token')!),
      })
      return next.handle(authReq)
    }

    return next.handle(request)
  }
}
