import { Injectable } from '@angular/core';
import {CrudImplService} from '@core/service/crud-impl.service';
import {EditableLookup} from '@shared/model/editable-lookup';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupEditService extends CrudImplService<EditableLookup,number>{

  url: string = environment.baseApiUrl + '/lookup';
  constructor() {
    super();
  }
  getServiceUrl(): string {
    return this.url;
  }
}
