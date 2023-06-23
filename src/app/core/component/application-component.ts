
import {Component, inject} from '@angular/core';
import {AuthService, User} from '@core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';

@Component({
  selector: 'application-component',
  template : ''
})
export abstract class ApplicationComponent {
  auth:AuthService = inject(AuthService);
  user!: User;
  toastService:ToastrService = inject(ToastrService);
  router: Router = inject(Router);
  translateService: TranslateService = inject(TranslateService);
  rolesService:NgxRolesService = inject(NgxRolesService);
  permissionsService:NgxPermissionsService = inject(NgxPermissionsService);

  protected constructor() {
    this.auth.user().subscribe(user => (this.user = user));
  }

  translateKey(key: string) {
    return this.translateService.get(key);
  }

  translateWithParams(key: string, params: any) {
    return this.translateService.get(key, params);
  }

  toastInfoFromKey(key:string){
    this.translateKey(key).subscribe(
      data=>{
        this.toastService.info(data);
      }
    );
  }

  toastErrorFromKey(key:string){
    this.translateKey(key).subscribe(
      data=>{
        this.toastService.error(data);
      }
    );
  }

  toastWarningFromKey(key:string){
    this.translateKey(key).subscribe(
      data=>{
        this.toastService.warning(data);
      }
    );
  }

  toastSuccessFromKey(key:string){
    this.translateKey(key).subscribe(
      data=>{
        this.toastService.success(data);
      }
    );
  }
}
