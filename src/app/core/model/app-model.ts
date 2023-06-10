import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class AppModel {
  static positiveNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (isNaN(value) || value < 0) {
        return { positiveNumber: true };
      }
      return null;
    };
  }

  static toDateValidate(fromDateControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const fromDateControl = control.root.get(fromDateControlName);
      //alert(JSON.stringify(fromDateControl))
      if (fromDateControl && control.value && fromDateControl.value) {
        const fromDate = new Date( fromDateControl.value);
        const toDate = new Date(control.value);
        if (fromDate > toDate) {
          return { dateComparison: true };
        }
      }
      return null;
    };
  }

  static fromDateValidator(toDateControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const toDateControl = control.root.get(toDateControlName);
      //alert(JSON.stringify(fromDateControl))
      if (toDateControl && control.value && toDateControl.value) {
        const fromDate = new Date( control.value);
        const toDate = new Date(toDateControl.value);
        if (fromDate > toDate) {
          return { dateComparison: true };
        }
      }
      return null;
    };
  }
}
