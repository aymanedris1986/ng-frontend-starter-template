import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradesRoutingModule } from './trades-routing.module';
import { TradesNewPositionComponent } from './new-position/new-position.component';
import { TradesTradeEditFormComponent } from './trade-edit-form/trade-edit-form.component';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';


const COMPONENTS: any[] = [TradesNewPositionComponent, TradesTradeEditFormComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    TradesRoutingModule,
    BadgeModule,
    ButtonModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class TradesModule { }
