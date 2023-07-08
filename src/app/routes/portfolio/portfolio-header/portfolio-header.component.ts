import { Component, OnInit } from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {TradePortfolio} from '@shared/model/trade-portfolio';
import {AppModel} from '@core/model/app-model';
import {CrudService} from '@core/service/crud-service';
import {AppCrudModel} from '@core/model/app-crud-model';
import {FormGroup} from '@angular/forms';
import {TradePortfolioService} from '@shared/services/application/trade-portfolio.service';

@Component({
  selector: 'app-portfolio-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioPortfolioHeaderComponent extends ApplicationCrudFormComponent<number> implements OnInit {

  constructor(private tradePortfolioService:TradePortfolioService) { super();}

  ngOnInit() {
  }

  createNewModelObject(): AppModel {
    return new TradePortfolio();
  }

  getCrudService(): CrudService<AppCrudModel<number>, number> {
    return this.tradePortfolioService;
  }

  getFormGroup(): FormGroup {
    return this.toFormGroup(TradePortfolio.fg);
  }

  getLovNames(): string[] {
    return [];
  }

}
