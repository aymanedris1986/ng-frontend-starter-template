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
import { TradesTradeBulkEditorComponent } from './trade-bulk-editor/trade-bulk-editor.component';
import { TradesNewPairAddComponent } from './new-pair-add/new-pair-add.component';
import { TradesNewPairDialogComponent } from './new-pair-dialog/new-pair-dialog.component';


const COMPONENTS: any[] = [TradesNewPositionComponent, TradesTradeEditFormComponent, TradesAllTradesComponent, TradesTradesTableComponent, TradesTradeEditPageComponent, TradesTradeBulkEditorComponent, TradesNewPairAddComponent, TradesNewPairDialogComponent];
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
