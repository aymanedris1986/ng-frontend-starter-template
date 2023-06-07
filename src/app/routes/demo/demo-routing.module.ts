import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRegionsPageComponent } from './regions-page/regions-page.component';

const routes: Routes = [{ path: 'regions-page', component: DemoRegionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
