
import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService, User} from '@core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LovService} from '@core/service/lov.service';
import {LovRecord} from '@core/model/lov-record';
@Component({
  selector: 'application-component',
  template : ''
})
export abstract class ApplicationComponent {
  lovService:LovService;
  lovMap : { [key: string]: Observable<LovRecord[]> } = {};
  auth:AuthService = inject(AuthService);
  user!: User;
  toastService:ToastrService = inject(ToastrService);
  router: Router = inject(Router);

  protected constructor() {
    this.lovService = inject(LovService);
    this.getLovNames().forEach(
      (lovName:string)=>{
        this.lovMap[lovName] = this.lovService.getLov(lovName);
      }
    );
  }

  abstract getLovNames() : string[];
}
