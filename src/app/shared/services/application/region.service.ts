import {Injectable} from '@angular/core';
import {CrudImplService} from '@core/service/crud-impl.service';
import {Region} from '@shared/model/region';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends CrudImplService<Region, number> {
  url: string = environment.baseApiUrl + '/region';
  constructor() {
    super();
  }

  getServiceUrl(): string {
    return this.url;
  }
}
