import { Injectable } from '@angular/core';
import {CrudImplService} from '@core/service/crud-impl.service';
import {SecUserProfile} from '@shared/model/sec-user-profile';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SecUserProfileService extends CrudImplService<SecUserProfile,string>{
  url: string = environment.baseApiUrl + '/user-profile';
  constructor() { super();}

  getServiceUrl(): string {
    return this.url;
  }
}
