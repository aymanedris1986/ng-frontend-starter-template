import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {CrudService} from '@core/service/crud-service';
import {AppCrudModel} from '@core/model/app-crud-model';
import {ApiResponse} from '@core/model/api-response';
import {ApplicationInputFormComponent} from '@core/component/application-input-form-component';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'application-crud-component',
  template: ''
})
export abstract class ApplicationCrudFormComponent<I> extends ApplicationInputFormComponent implements OnInit {
  private _id: I;
  @Input()showToolBar:boolean;
  @Input()backButtonNavigation:string;
  @Input()backButtonExtras?: NavigationExtras;
  crudService: CrudService<AppCrudModel<I>, I>;


  @Input()
  set id(value: I) {
    this._id = value;
    this.findById();
  }
  get id(): I {
    return this._id;
  }

  ngOnInit(): void {

  }

  protected constructor() {
    super();
  }


  protected initiateComponentDefaults() {
    super.initiateComponentDefaults();
    this.showToolBar = true;

  }

  public crudModel():AppCrudModel<I>{
    return this.model as AppCrudModel<I>;
  }

  private findById() {
    this.setOldRecord();
    this.beforeQueryModel();
    this.service().findById(this.id).pipe(
      catchError(error => {
        this.handleUnexpectedError(error);
        throw error;
      })
    ).subscribe(
      data => {
        this.setModel(data.data);
        this.fg.patchValue(this.model);
        this.afterQueryModel();
        this.afterModelInitiation();
      }
    );
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
        this.insert();
      } else {
        this.update();
      }
    }
  }


  private update() {
    this.beforeUpdate();
    this.service().update(this.crudModel()).pipe(
      catchError(error => {
        this.afterUpdateError(error);
        this.handleSubmitError(error);
        throw error;
      })
    ).subscribe(
      data => {
        this.afterUpdateSuccess(data.data);
        this.setModel(data.data);
        this.handleSubmitSuccess(data);
      }
    );
  }

  private insert() {
    this.beforeInsert();
    this.service().insert(this.crudModel()).pipe(
      catchError(error => {
        this.afterInsertError(error);
        this.handleSubmitError(error);
        throw error;
      })
    ).subscribe(
      data => {
        this.afterInsertSuccess(data.data);
        this.setModel(data.data);
        this.handleSubmitSuccess(data);
        this.setOldRecord();
      }
    );
  }

  private handleSubmitSuccess(data: ApiResponse) {
    this.toastSuccessFromKey('messages.saved-success');
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
    this.toastErrorFromKey('messages.unexpected-error');
    this.toastService.error(JSON.stringify(error));
  }


  back(): void {
    this.router.navigate([this.backButtonNavigation],this.backButtonExtras);
  }

  abstract getCrudService(): CrudService<AppCrudModel<I>, I>;

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


  protected beforeQueryModel() {

  }

  protected afterQueryModel() {

  }





}
