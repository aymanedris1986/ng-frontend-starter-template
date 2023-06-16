import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradesNewPositionComponent } from './new-position/new-position.component';
import { TradesTradeEditFormComponent } from './trade-edit-form/trade-edit-form.component';
import { TradesAllTradesComponent } from './all-trades/all-trades.component';
import { TradesTradesTableComponent } from './trades-table/trades-table.component';
import { TradesTradeEditPageComponent } from './trade-edit-page/trade-edit-page.component';
import { TradesTradeBulkEditorComponent } from './trade-bulk-editor/trade-bulk-editor.component';
import { TradesNewPairAddComponent } from './new-pair-add/new-pair-add.component';
import { TradesNewPairDialogComponent } from './new-pair-dialog/new-pair-dialog.component';

const routes: Routes = [{ path: 'new-position', component: TradesNewPositionComponent },
{ path: 'trade-edit-form', component: TradesTradeEditFormComponent },
{ path: 'all-trades', component: TradesAllTradesComponent },
{ path: 'trades-table', component: TradesTradesTableComponent },
{ path: 'trade-edit-page', component: TradesTradeEditPageComponent },
{ path: 'trade-bulk-editor', component: TradesTradeBulkEditorComponent },
{ path: 'new-pair-add', component: TradesNewPairAddComponent },
{ path: 'new-pair-dialog', component: TradesNewPairDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
