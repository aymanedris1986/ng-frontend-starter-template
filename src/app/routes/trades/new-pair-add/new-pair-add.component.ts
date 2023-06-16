import { Component, OnInit } from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {AppCrudModel} from '@core/model/app-crud-model';
import {EditableLookup} from '@shared/model/editable-lookup';
import {CrudImplService} from '@core/service/crud-impl.service';
import {FormGroup} from '@angular/forms';
import {LookupEditService} from '@shared/services/application/lookup-edit.service';

@Component({
  selector: 'app-trades-new-pair-add',
  templateUrl: './new-pair-add.component.html',
  styleUrls: ['./new-pair-add.component.scss']
})
export class TradesNewPairAddComponent extends ApplicationCrudFormComponent<number> implements OnInit{

constructor(private lookupEditService:LookupEditService) {
  super();
}
  ngOnInit() {
  }

  createNewModelObject(): AppCrudModel<number> {
    return new EditableLookup();
  }

  getCrudService(): CrudImplService<AppCrudModel<number>, number> {
    return this.lookupEditService;
  }

  getFormGroup(): FormGroup {
    return this.toFormGroup(EditableLookup.fg);
  }

  getLovNames(): string[] {
    return [];
  }

}
