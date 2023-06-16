import {Component, OnInit} from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {AppModel} from '@core/model/app-model';
import {CrudService} from '@core/service/crud-service';
import {FormGroup} from '@angular/forms';
import {AppCrudModel} from '@core/model/app-crud-model';
import {Trade} from '@shared/model/trade';
import {TradeService} from '@shared/services/application/trade.service';
import {TradeCalculationService} from '@shared/services/application/business/trade-calculation.service';
import {TradesNewPairDialogComponent} from '../new-pair-dialog/new-pair-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {LovRecord} from '@core/model/lov-record';

@Component({
  selector: 'app-trades-trade-edit-form',
  templateUrl: './trade-edit-form.component.html',
  styleUrls: ['./trade-edit-form.component.scss']
})
export class TradesTradeEditFormComponent extends ApplicationCrudFormComponent<number> implements OnInit {
  lovMapElement:Observable<LovRecord[]>
  symbols:LovRecord[];

  constructor(private tradeService: TradeService,private tradeCalculationService:TradeCalculationService,public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.lovMapElement = this.lovMap['SYMBOL'];
    this.lovMapElement.subscribe(
      data=>{
        this.symbols = data;
      }
    )
    this.onLockTrade();
  }


  protected onFormValueChange(data: any) {
    super.onFormValueChange(data);
    console.log(data);
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

  tradeDetailsExpanded(): boolean {
    return this.id !== null && this.id !== undefined;
  }


  changeLockTrade(event:any){
    this.setFormControlValue('tradeSplitIsClosed',event.checked);
  }

  getLockTradeChecked(){
    return  this.getFormControlValue('tradeSplitIsClosed');
  }


  get totalPosition(): number {
    const tradeSplitSplitPrice = this.getFormControlValue('tradeSplitSplitPrice');
    const tradeSplitSplitSize = this.getFormControlValue('tradeSplitSplitSize');
    return this.tradeCalculationService.calcualteTradeTotal(tradeSplitSplitPrice,tradeSplitSplitSize);
  }

  get rr(){
    const tradeSplitSplitPrice = this.getFormControlValue('tradeSplitSplitPrice');
    const tradeSplitTakeProfit = this.getFormControlValue('tradeSplitTakeProfit');
    const tradeSplitStopLoss = this.getFormControlValue('tradeSplitStopLoss');
    return this.tradeCalculationService.calculateRR(tradeSplitSplitPrice,tradeSplitTakeProfit,tradeSplitStopLoss);
  }

  get lockTradeDisabled():boolean{
    if(!this.fg.valid){
      return true;
    }
    const trade = this.model as Trade;
    if(!trade.tradeSplitSplitPrice){
      return true;
    }
    if(!trade.tradeSplitExitPrice){
      return true;
    }
    if(!trade.exitDate){
      return true;
    }
    return false;
  }


  newSymbol() {
    const dialogRef = this.dialog.open(TradesNewPairDialogComponent,{data : {}});
    dialogRef.afterClosed().subscribe(
      (symbolCode: string)=>{
        this.symbols = [];
        this.lovMapElement.subscribe(
          data=>{
            this.symbols = data;
            this.setFormControlValue('symbol',symbolCode);
            this.submit();
          }
        )
      }
    );
  }
}
