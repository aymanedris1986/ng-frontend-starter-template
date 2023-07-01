import { Injectable } from '@angular/core';
import { BehaviorSubject, iif, merge, of } from 'rxjs';
import { catchError, map, share, switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { filterObject, isEmptyObject } from './helpers';
import { User } from './interface';
import {StartupService} from '@core/bootstrap/startup.service';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import {Menu, MenuService} from '@core/bootstrap/menu.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>({});
  private change$ = merge(
    this.tokenService.change(),
    this.tokenService.refresh().pipe(switchMap(() => this.refresh()))
  ).pipe(
    switchMap(() => this.assignUser()),
    share()
  );

  constructor(private loginService: LoginService, private tokenService: TokenService,
              private permissonsService: NgxPermissionsService,
              private rolesService: NgxRolesService,private menuService:MenuService) {}

  init() {
    return new Promise<void>(resolve => this.change$.subscribe(() => resolve()));
  }

  change() {
    return this.change$;
  }

  check() {
    return this.tokenService.valid();
  }

  login(username: string, password: string, rememberMe = false) {
    this.tokenService.clear();
    return this.loginService.login(username, password, rememberMe).pipe(
      tap(token => this.tokenService.set(token)),
      switchMap(()=>this.assignUser()),
      tap(user=>{this.setPermissions(user)}),
      switchMap(() => this.menu()),
      tap(menu => this.setMenu(menu)),
      map(() => this.check())
    );
  }

  refresh() {
    return this.loginService
      .refresh(filterObject({ refresh_token: this.tokenService.getRefreshToken() }))
      .pipe(
        catchError(() => of(undefined)),
        tap(token => this.tokenService.set(token)),
        map(() => this.check())
      );
  }

  logout() {
    return this.loginService.logout().pipe(
      tap(() => this.tokenService.clear()),
      map(() => !this.check())
    );
  }

  user() {
    return this.user$.pipe(share());
  }

  menu() {
    return iif(() => this.check(), this.loginService.menu(), of([]));
  }

  private assignUser() {
    if (!this.check()) {
      return of({}).pipe(tap(user => this.user$.next(user)));
    }
    if (!isEmptyObject(this.user$.getValue())) {
      return of(this.user$.getValue());
    }
    return this.loginService.me().pipe(tap(user => this.user$.next(user)));
  }

  private setPermissions(user: User) {
    // In a real app, you should get permissions and roles from the user information.
    const permissions = user.permissions as string[];
    const roles = user.roles as string[];
    const rolesAndPermissions = [...permissions, ...roles,user.mainRole];
    this.permissonsService.flushPermissions();
    this.rolesService.flushRoles();
    this.rolesService.addRoleWithPermissions(user.mainRole!,rolesAndPermissions as string[]);
  }

  private setMenu(menu: Menu[]) {
    this.menuService.addNamespace(menu, 'menu');
    this.menuService.set(menu);
  }
}
