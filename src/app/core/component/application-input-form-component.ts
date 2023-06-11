import {Component, inject} from '@angular/core';
import {ApplicationComponent} from '@core/component/application-component';
import {LovService} from '@core/service/lov.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {LovRecord} from '@core/model/lov-record';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AppModel} from '@core/model/app-model';
import {AppCrudModel} from '@core/model/app-crud-model';

@Component({
  selector: 'application-input-component',
  template : ''
})
export abstract class ApplicationInputFormComponent extends ApplicationComponent{

  lovService:LovService = inject(LovService);
  lovMap : { [key: string]: Observable<LovRecord[]> } = {};
  fg: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  newRecord: boolean;
  model:AppModel;
  model$:BehaviorSubject<AppModel>;

  protected constructor() {
    super();
    this.initiateComponentDefaults();
  }

  protected initiateComponentDefaults() {
    this.prepareLovs();
    this.fg = this.getFormGroup();
    this.setNewRecord();
    this.setModel(this.createNewModelObject());
    this.afterModelInitiation();
    this.fg.valueChanges.subscribe(data => {
      this.onFormValueChange(data);
      if (this.fg.valid) {
        this.onValueChangeBeforeUpdateModel(data);
        const oldModel:AppModel = this.model;
        this.setModel(Object.assign({}, this.model, data));
        this.onValueChangeAfterUpdateModel(oldModel,data);
      }else {
        this.onInvalidFormValueChange(data);
      }
    });
  }

  protected setOldRecord() {
    this.newRecord = false;
  }

  protected setNewRecord() {
    this.newRecord = true;
  }

  private prepareLovs() {
    this.getLovNames().forEach(
      (lovName: string) => {
        this.lovMap[lovName] = this.lovService.getLov(lovName);
      }
    );
  }
  toFormGroup(fg:any):FormGroup{
    return this.fb.nonNullable.group(fg);
  }

  protected setModel(data: any) {
    this.model = data;
    if(!this.model$){
      this.model$ = new BehaviorSubject<AppModel>(this.model);
    }else {
      this.model$.next(this.model);
    }
  }

  public setFormControlValue(formControlId:string,value:any){
    this.fg.controls[formControlId].setValue(value);
  }

  public getFormControlValue(formControlId:string):any{
    return this.fg.controls[formControlId].getRawValue();
  }

  public patchFormControlValue(formValues:any){
    this.fg.patchValue(formValues);
  }

  public disableFormControl(formControlId:string){
    this.fg.controls[formControlId].disable();
  }

  public enableFormControl(formControlId:string){
    this.fg.controls[formControlId].enable();
  }

  protected addFormControlValueChangeListener(controlName:string,listener: (value: any) => void){
    this.fg.controls[controlName].valueChanges.subscribe(listener);
  }

  abstract createNewModelObject():AppModel;

  abstract getLovNames() : string[];

  abstract getFormGroup(): FormGroup;

  protected afterModelInitiation() {

  }

  //override method for any before update logic
  protected onValueChangeBeforeUpdateModel(newData: any) {
  }
  //override method for any after update logic
  protected onValueChangeAfterUpdateModel(oldModel:AppModel, newData: any) {
  }

  protected onInvalidFormValueChange(data: any) {
  }

  protected onFormValueChange(data:any) {

  }
}
