
import {Component, inject} from '@angular/core';
import {AuthService, User} from '@core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'application-component',
  template : ''
})
export abstract class ApplicationComponent {
  auth:AuthService = inject(AuthService);
  user!: User;
  toastService:ToastrService = inject(ToastrService);
  router: Router = inject(Router);

  protected constructor() {
    this.auth.user().subscribe(user => (this.user = user));
  }
}
