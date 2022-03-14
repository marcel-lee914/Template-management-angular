import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function atLeastOneValidator(field, requiredList: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control) {
     const f = control.get(field);
     if (f.value !== undefined) {
       let isValid = false;
       requiredList.forEach( required => {
         if (control.get(required).value === true) {
           isValid = true;
         }
       });
       f.setErrors(isValid ? null : {requiredOne: true});
     }
    }
    return null;
  };
}
