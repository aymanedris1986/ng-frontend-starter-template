import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {LoginService, TokenService} from '@core/authentication';
import { BASE_URL } from './base-url-interceptor';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private hasHttpScheme = (url: string) => new RegExp('^http(s)?://', 'i').test(url);

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private loginService:LoginService,
    @Optional() @Inject(BASE_URL) private baseUrl?: string
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const handler = () => {
      if (request.url.includes('/auth/logout')) {
        this.router.navigateByUrl('/auth/login');
      }

      if (this.router.url.includes('/auth/login')) {
        this.router.navigateByUrl('/dashboard');
      }
    };
    if(request.url.includes('/auth/refresh-token')){
      return next.handle(request);
    }

    if(this.tokenService.getBearerToken() && this.tokenService.tokenExpired() && !this.tokenService.refreshTokenExpired()){
      this.loginService.refreshToken(this.tokenService.getRefreshToken()!).subscribe(
        data=>{
          this.tokenService.set(data);
        }
      );
      return this.appendTokenToHeader('Bearer '+this.tokenService.getRefreshToken()!,next, request, handler);
    }

    if (this.tokenService.valid() && this.shouldAppendToken(request.url)) {
      return this.appendTokenToHeader(this.tokenService.getBearerToken(),next, request, handler);
    }
    return next.handle(request).pipe(tap(() => handler()));
  }

  private appendTokenToHeader(token:string,next: HttpHandler, request: HttpRequest<unknown>, handler: () => void) {
    return next
      .handle(
        request.clone({
          headers: request.headers.append('Authorization', token),
          withCredentials: true,
        })
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.tokenService.clear();
          }
          return throwError(() => error);
        }),
        tap(() => handler())
      );
  }

  private shouldAppendToken(url: string) {
    return this.hasHttpScheme(url) || this.includeBaseUrl(url);
  }

  private includeBaseUrl(url: string) {
    if (!this.baseUrl) {
      return false;
    }

    const baseUrl = this.baseUrl.replace(/\/$/, '');

    return new RegExp(`^${baseUrl}`, 'i').test(url);
  }
}
