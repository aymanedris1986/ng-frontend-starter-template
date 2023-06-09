import { Component, OnInit } from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {AppModel} from '@core/model/app-model';
import {CrudService} from '@core/service/crud-service';
import {FormGroup} from '@angular/forms';
import {AppCrudModel} from '@core/model/app-crud-model';
import {Trade} from '@shared/model/trade';
import {TradeService} from '@shared/services/application/trade.service';

@Component({
  selector: 'app-trades-trade-edit-form',
  templateUrl: './trade-edit-form.component.html',
  styleUrls: ['./trade-edit-form.component.scss']
})
export class TradesTradeEditFormComponent extends ApplicationCrudFormComponent<number> implements OnInit {

  constructor(private tradeService:TradeService) { super();}

  ngOnInit() {
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
