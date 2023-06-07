import {Component, inject} from '@angular/core';
import {ApplicationComponent} from '@core/component/application-component';
import {LovService} from '@core/service/lov.service';
import {Observable} from 'rxjs';
import {LovRecord} from '@core/model/lov-record';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'application-input-component',
  template : ''
})
export abstract class ApplicationInputFormComponent extends ApplicationComponent{

  lovService:LovService = inject(LovService);
  lovMap : { [key: string]: Observable<LovRecord[]> } = {};
  fg: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  protected constructor() {
    super();
    this.prepareLovs();
    this.fg = this.getFormGroup();
  }

  private prepareLovs() {
    this.getLovNames().forEach(
      (lovName: string) => {
        this.lovMap[lovName] = this.lovService.getLov(lovName);
      }
    );
  }

  abstract getLovNames() : string[];

  abstract getFormGroup(): FormGroup;

}
