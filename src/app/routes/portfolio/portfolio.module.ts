import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioPortfolioMainComponent } from './portfolio-main/portfolio-main.component';

const COMPONENTS: any[] = [PortfolioPortfolioMainComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class PortfolioModule { }
