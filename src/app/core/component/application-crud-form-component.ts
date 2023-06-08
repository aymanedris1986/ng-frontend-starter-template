
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, inject, Input, OnInit} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {CrudService} from '@core/service/crud-service';
import {AppModel} from '@core/model/app-model';
import {ApiResponse} from '@core/model/api-response';
import {ApplicationInputFormComponent} from '@core/component/application-input-form-component';

@Component({
  selector: 'application-crud-component',
  template: ''
})
export abstract class ApplicationCrudFormComponent<I> extends ApplicationInputFormComponent implements OnInit {
  @Input() id: I;
  @Input()showToolBar:boolean;
  @Input()backButtonNavigation:string;
  @Input()backButtonExtras?: NavigationExtras;
  crudService: CrudService<AppModel<I>, I>;
  model: AppModel<I>;
  newRecord: boolean;

  protected constructor() {
    super();
    this.showToolBar = true;
    this.newRecord = true;
  }

  ngOnInit(): void {
    if (this.id) {
      this.newRecord = false;
      this.beforeNgOnInitQueryModel();
      this.service().findById(this.id).subscribe(
        data => {
          this.model = data.data;
          this.fg.patchValue(this.model);
          this.afterNgOnInitQueryModel();
          this.afterModelInitiation();
        },
        error => {
          this.handleUnexpectedError(error);
        }
      );
    }else{
      this.model = this.createNewModelObject();
      this.afterModelInitiation();
    }
    this.fg.valueChanges.subscribe(data => {
      if (this.fg.valid) {
        this.onValueChangeBeforeUpdateModel(data);
        const oldModel:AppModel<I> = this.model;
        this.model = Object.assign({}, this.model, data);
        this.onValueChangeAfterUpdateModel(oldModel,data);
      }
    });
  }


  private service() {
    if(!this.crudService){
      this.crudService = this.getCrudService();
    }
    return this.crudService;
  }

  submit() {
    if (this.fg.valid) {
      if (this.newRecord) {
        this.beforeInsert();
        this.service().insert(this.model).subscribe(
          data => {
            this.afterInsertSuccess(data.data);
            this.model = data.data;
            this.handleSubmitSuccess(data);
            this.newRecord = false;
          },
          error => {
            this.afterInsertError(error);
            this.handleSubmitError(error);
          }
        );
      } else {
        this.beforeUpdate();
        this.service().update(this.model).subscribe(
          data => {
            this.afterUpdateSuccess(data.data);
            this.model = data.data;
            this.handleSubmitSuccess(data);
          },
          error => {
            this.afterUpdateError(error);
            this.handleSubmitError(error);
          }
        );
      }

    }
  }


  private handleSubmitSuccess(data: ApiResponse) {
    this.toastService.info('Saved successfully');
  }

  private handleSubmitError(error: any) {
    if (error.error && error.error.data && error.error.data.validationErrors) {
      const validationErrors = error.error.data.validationErrors;
      for (const key in validationErrors) {
        const value = validationErrors[key];
        this.toastService.error(value);
      }
    } else {
      this.handleUnexpectedError(error);
    }
  }


  private handleUnexpectedError(error: any) {
    this.toastService.error('Unexpected error');
    this.toastService.error(JSON.stringify(error));
  }


  back(): void {
    this.router.navigate([this.backButtonNavigation],this.backButtonExtras);
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
  //override to put your custom form builder


  //override method for any before update logic
  protected onValueChangeBeforeUpdateModel(newData: any) {
  }
  //override method for any after update logic
  protected onValueChangeAfterUpdateModel(oldModel:AppModel<I>,newData: any) {
  }

  protected addFormControlValueChangeListener(controlName:string,listener: (value: any) => void){
    this.fg.controls[controlName].valueChanges.subscribe(listener);
  }


  abstract createNewModelObject():AppModel<I>;

  abstract getCrudService(): CrudService<AppModel<I>, I>;




  //override method for any before insert logic
  protected beforeInsert() {
  }
  //override method for any after insert logic
  protected afterInsertSuccess(newData: any) {
  }

  //override method for any after insert error logic
  protected afterInsertError(error:any) {
  }

  //override method for any before update logic
  protected beforeUpdate() {
  }
  //override method for any after update logic
  protected afterUpdateSuccess(newData: any) {
  }

  //override method for any after update error logic
  protected afterUpdateError(error:any) {
  }


  protected beforeNgOnInitQueryModel() {

  }

  protected afterNgOnInitQueryModel() {

  }


  protected afterModelInitiation() {

  }
}
