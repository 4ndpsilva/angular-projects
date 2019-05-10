import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpHeaders } from '@angular/common/http';
import  { Observable } from 'rxjs';

@Injectable()
export class TesteInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>>{
    const duplic = req.clone({
      headers: req.headers.set('Authentication', 'Bearer zkhfa')
    });

    return handler.handle(duplic);
  }      
}