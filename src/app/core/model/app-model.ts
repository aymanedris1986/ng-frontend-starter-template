import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export abstract class AppModel<I> {
  id:I;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;


  static customValidator(control: AbstractControl): ValidationErrors | null {
    // Validation logic here
    // Return null if the validation passes, or a ValidationErrors object if it fails
    if (control.value === 'example') {
      return { customValidation: true };
    }
    return null;
  }

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
