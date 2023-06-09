import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradesRoutingModule } from './trades-routing.module';
import { TradesNewPositionComponent } from './new-position/new-position.component';
import { TradesTradeEditFormComponent } from './trade-edit-form/trade-edit-form.component';

const COMPONENTS: any[] = [TradesNewPositionComponent, TradesTradeEditFormComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    TradesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class TradesModule { }
