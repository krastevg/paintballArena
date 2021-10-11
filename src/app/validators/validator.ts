import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  let { value } = control;
  value = String(value);
  if (!value) {
    return null;
  }

  const isValid =
    /^([\w!#$%&'*+\-\/=?^_`{|\.]{3,64})@([\w\.]{3,253})\.([a-z]{2,3})$/.test(
      value
    );
  return isValid ? null : { emailValidator: true };
}

export function rePasswordValidatorFactory(
  targetControl: AbstractControl
): ValidatorFn {
  return function rePasswordValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const areTheSame = targetControl.value === control.value;
    return areTheSame ? null : { rePasswordValidator: true };
  };
}
