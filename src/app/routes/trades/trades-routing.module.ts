import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradesNewPositionComponent } from './new-position/new-position.component';
import { TradesTradeEditFormComponent } from './trade-edit-form/trade-edit-form.component';
import { TradesAllTradesComponent } from './all-trades/all-trades.component';

const routes: Routes = [{ path: 'new-position', component: TradesNewPositionComponent },
{ path: 'trade-edit-form', component: TradesTradeEditFormComponent },
{ path: 'all-trades', component: TradesAllTradesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
