import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradesNewPositionComponent } from './new-position/new-position.component';
import { TradesTradeEditFormComponent } from './trade-edit-form/trade-edit-form.component';

const routes: Routes = [{ path: 'new-position', component: TradesNewPositionComponent },
{ path: 'trade-edit-form', component: TradesTradeEditFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
