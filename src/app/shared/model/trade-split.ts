import {AppCrudModel} from '@core/model/app-crud-model';

export class TradeSplit extends AppCrudModel<number>{
  splitDirection: string;
  splitDate: Date;
  splitPrice: number;
  splitSize:  number;
  stopLoss:  number;
  takeProfit:  number;
  commission:  number;
}
