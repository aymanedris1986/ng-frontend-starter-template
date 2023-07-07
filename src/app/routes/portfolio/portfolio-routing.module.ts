import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioPortfolioMainComponent } from './portfolio-main/portfolio-main.component';

const routes: Routes = [{ path: 'portfolio-main', component: PortfolioPortfolioMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
