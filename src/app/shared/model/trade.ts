import {AppCrudModel} from '@core/model/app-crud-model';
import {TradeSplit} from '@shared/model/trade-split';
import {Validators} from '@angular/forms';

export class Trade extends AppCrudModel<number>{
  symbol: string;
  direction: string;
  entryDate: Date;
  exitDate: Date;
  notes: string;
  tradeSplitId:number;
  tradeSplitSplitDirection:string;
  tradeSplitSplitDate:Date;
  tradeSplitSplitPrice:number;
  tradeSplitSplitSize:number;
  tradeSplitStopLoss:number;
  tradeSplitTakeProfit:number;
  tradeSplitCommission:number;
  tradeSplitCreatedAt:Date;
  tradeSplitCreatedBy: string;
  tradeSplitUpdatedAt:Date;
  tradeSplitUpdatedBy: string;

  static fg :any  =       {
    symbol: [null],
    direction: ['LONG', [Validators.required]],
    entryDate: [new Date(), [Validators.required]],
    exitDate: [null],
    notes: [null],
    tradeSplitSplitDate:[null],
    tradeSplitSplitPrice:[null,[this.positiveNumberValidator()]],
    tradeSplitSplitSize:[null,[this.positiveNumberValidator()]],
    tradeSplitStopLoss:[null,[this.positiveNumberValidator()]],
    tradeSplitTakeProfit:[null,[this.positiveNumberValidator()]],
    tradeSplitCommission:[null,[this.positiveNumberValidator()]],
  };
}
