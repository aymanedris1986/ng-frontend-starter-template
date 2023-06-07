import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoRegionsPageComponent } from './regions-page/regions-page.component';
import { DemoRegionsPageRegionViewComponent } from './regions-page/region-view/region-view.component';

const COMPONENTS: any[] = [DemoRegionsPageComponent];
const COMPONENTS_DYNAMIC: any[] = [DemoRegionsPageRegionViewComponent];

@NgModule({
  imports: [
    SharedModule,
    DemoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class DemoModule { }
