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
}
