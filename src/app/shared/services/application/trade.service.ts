import { Injectable } from '@angular/core';
import {CrudImplService} from '@core/service/crud-impl.service';
import {Trade} from '@shared/model/trade';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TradeService extends CrudImplService<Trade, number>{

  url: string = environment.baseApiUrl + '/trade';
  constructor() {
    super();
  }

  getServiceUrl(): string {
    return this.url;
  }
}
