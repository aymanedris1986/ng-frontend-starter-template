import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeCalculationService {

  constructor() { }

  calcualteTradeTotal(price:number,size:number):number{
    if(price && size){
      return price * size;
    }
    return 0;
  }
}
