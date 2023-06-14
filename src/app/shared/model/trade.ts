import {AppCrudModel} from '@core/model/app-crud-model';
import {TradeSplit} from '@shared/model/trade-split';
import {AbstractControl, ValidatorFn, Validators} from '@angular/forms';

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
  tradeSplitExitPrice:number;
  tradeSplitIsClosed:boolean;

  static fg :any  =       {
    symbol: [null],
    direction: ['LONG', [Validators.required]],
    entryDate: [new Date(), [Validators.required,this.cantBeInTheFuture(),this.fromDateValidator('exitDate')]],
    exitDate: [null,[this.cantBeInTheFuture(),this.toDateValidate('entryDate')]],
    notes: [null],
    tradeSplitSplitPrice:[null,[this.positiveNumberValidator(),this.priceValidator()]],
    tradeSplitSplitSize:[null,[this.positiveNumberValidator()]],
    tradeSplitStopLoss:[null,[this.positiveNumberValidator(),this.stopLossValidator()]],
    tradeSplitTakeProfit:[null,[this.positiveNumberValidator(),this.takeProfitValidator()]],
    tradeSplitCommission:[null,[this.positiveNumberValidator()]],
    tradeSplitExitPrice:[null,[this.positiveNumberValidator()]],
    tradeSplitIsClosed:[false]
  };


  static takeProfitValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const slControl = control.root.get('tradeSplitStopLoss');
      const priceControl = control.root.get('tradeSplitSplitPrice');

      const tp = new Number(control.value);
      if(slControl && slControl.value){
        const sl = new Number(slControl.value);
        if(sl >= tp){
          return { slgttp : true };
        }
      }

      if(priceControl && priceControl.value){
        const price = new Number(priceControl.value);
        if(tp <= price){
          return { pricegttp : true };
        }
      }
      return null;
    };
  }

  static stopLossValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const tpControl = control.root.get('tradeSplitTakeProfit');
      const priceControl = control.root.get('tradeSplitSplitPrice');

      const sl = new Number(control.value);
      if(tpControl && tpControl.value){
        const tp = new Number(tpControl.value);
        if(sl >= tp){
          return { slgttp : true };
        }
      }

      if(priceControl && priceControl.value){
        const price = new Number(priceControl.value);
        if(sl >= price){
          return { priceltsl : true };
        }
      }
      return null;
    };
  }

  static priceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const tpControl = control.root.get('tradeSplitTakeProfit');
      const slControl = control.root.get('tradeSplitStopLoss');

      const price = new Number(control.value);
      if(tpControl && tpControl.value){
        const tp = new Number(tpControl.value);
        if(price >= tp){
          return { pricegttp : true };
        }
      }

      if(slControl && slControl.value){
        const sl = new Number(slControl.value);
        if(sl >= price){
          return { priceltsl : true };
        }
      }
      return null;
    };
  }


}
