import {Component, OnInit} from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {AppModel} from '@core/model/app-model';
import {CrudService} from '@core/service/crud-service';
import {FormGroup} from '@angular/forms';
import {AppCrudModel} from '@core/model/app-crud-model';
import {Trade} from '@shared/model/trade';
import {TradeService} from '@shared/services/application/trade.service';
import {TradeCalculationService} from '@shared/services/application/business/trade-calculation.service';

@Component({
  selector: 'app-trades-trade-edit-form',
  templateUrl: './trade-edit-form.component.html',
  styleUrls: ['./trade-edit-form.component.scss']
})
export class TradesTradeEditFormComponent extends ApplicationCrudFormComponent<number> implements OnInit {

  totalPosition:number;
  rr:number;
  constructor(private tradeService: TradeService,private tradeCalculationService:TradeCalculationService) {
    super();
  }

  ngOnInit() {
    this.onLockTrade();
  }


  protected onFormValueChange(data: any) {
    const trade :Trade = data as Trade;
    this.totalPosition = this.tradeCalculationService.calcualteTradeTotal(trade.tradeSplitSplitPrice,trade.tradeSplitSplitSize);
    this.rr = this.tradeCalculationService.calculateRR(trade.tradeSplitSplitPrice,trade.tradeSplitTakeProfit,trade.tradeSplitStopLoss);
    
  }

  private onLockTrade() {
    this.fg.controls['tradeSplitIsClosed'].valueChanges.subscribe(
      data => {
        if (data) {
          this.disableForm();
        } else {
          this.enableForm();
        }
      }
    );
  }

  private enableForm() {
    this.enableFormControl('symbol');
    this.enableFormControl('entryDate');
    this.enableFormControl('exitDate');
    this.enableFormControl('notes');
    this.enableFormControl('tradeSplitSplitPrice');
    this.enableFormControl('tradeSplitSplitSize');
    this.enableFormControl('tradeSplitStopLoss');
    this.enableFormControl('tradeSplitTakeProfit');
    this.enableFormControl('tradeSplitCommission');
    this.enableFormControl('tradeSplitExitPrice');
  }

  private disableForm() {
    this.disableFormControl('symbol');
    this.disableFormControl('entryDate');
    this.disableFormControl('exitDate');
    this.disableFormControl('notes');
    this.disableFormControl('tradeSplitSplitPrice');
    this.disableFormControl('tradeSplitSplitSize');
    this.disableFormControl('tradeSplitStopLoss');
    this.disableFormControl('tradeSplitTakeProfit');
    this.disableFormControl('tradeSplitCommission');
    this.disableFormControl('tradeSplitExitPrice');
  }

  createNewModelObject(): AppModel {
    return new Trade();
  }

  getCrudService(): CrudService<AppCrudModel<number>, number> {
    return this.tradeService;
  }

  getFormGroup(): FormGroup {
    return this.toFormGroup(Trade.fg);
  }

  getLovNames(): string[] {
    return ['SYMBOL'];
  }
}
