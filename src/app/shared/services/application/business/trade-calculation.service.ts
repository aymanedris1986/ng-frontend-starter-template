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

  calculateRR(price: number, takeProfit: number, stopLoss: number): number {
    if (!price || !takeProfit || !stopLoss){
      return 0;
    }
    const risk = price - stopLoss;
    console.log('risk '+risk);
    const reward = takeProfit - price;
    if (risk <= 0) {
      console.log('risk <= 0');
      return 0;
    }
    console.log('reward / risk '+reward / risk);
    return reward / risk;
  }
}
