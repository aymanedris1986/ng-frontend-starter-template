import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradesRoutingModule } from './trades-routing.module';
import { TradesNewPositionComponent } from './new-position/new-position.component';
import { TradesTradeEditFormComponent } from './trade-edit-form/trade-edit-form.component';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import { TradesAllTradesComponent } from './all-trades/all-trades.component';
import { TradesTradesTableComponent } from './trades-table/trades-table.component';
import { TradesTradeEditPageComponent } from './trade-edit-page/trade-edit-page.component';


const COMPONENTS: any[] = [TradesNewPositionComponent, TradesTradeEditFormComponent, TradesAllTradesComponent, TradesTradesTableComponent, TradesTradeEditPageComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    TradesRoutingModule,
    BadgeModule,
    ButtonModule,
    StyleClassModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class TradesModule { }
