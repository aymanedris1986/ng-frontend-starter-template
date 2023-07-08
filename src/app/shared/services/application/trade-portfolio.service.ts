import { Injectable } from '@angular/core';
import {CrudImplService} from '@core/service/crud-impl.service';
import {TradePortfolio} from '@shared/model/trade-portfolio';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TradePortfolioService  extends CrudImplService<TradePortfolio, number>{

  url: string = environment.baseApiUrl + '/trade-portfolio';
  constructor() {
    super();
  }

  getServiceUrl(): string {
    return this.url;
  }
}
