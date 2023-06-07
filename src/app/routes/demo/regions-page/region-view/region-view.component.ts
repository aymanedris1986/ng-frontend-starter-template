import {Component, OnInit} from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {AppModel} from '@core/model/app-model';
import {CrudService} from '@core/service/crud-service';
import {FormGroup} from '@angular/forms';
import {RegionService} from '@shared/services/application/region.service';
import {Region} from '@shared/model/region';

@Component({
  selector: 'app-demo-regions-page-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.scss']
})
export class DemoRegionsPageRegionViewComponent extends ApplicationCrudFormComponent<number> {

  constructor(private regionService: RegionService) {
    super();
  }


  createNewModelObject(): AppModel<number> {
    return new Region();
  }

  getCrudService(): CrudService<AppModel<number>, number> {
    return this.regionService;
  }

  getFormGroup(): FormGroup {
    return this.fb.nonNullable.group(Region.fg);
  }

  getLovNames(): string[] {
    return [];
  }

}
