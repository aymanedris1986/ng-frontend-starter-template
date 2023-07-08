import {AppCrudModel} from '@core/model/app-crud-model';

export class TradePortfolio extends AppCrudModel<number>{
    portfolioName:string;
    portfolioOwnerUser:string;
    numberOfSeats:number;
    balance:number;

    static fg :any  =  {
        portfolioName: [null]
    }
}
