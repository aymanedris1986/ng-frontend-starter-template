import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {AppModel} from '@core/model/app-model';

export abstract class AppCrudModel<I> extends AppModel{
  id:I;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
