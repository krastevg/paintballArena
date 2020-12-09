import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(
  control: AbstractControl
): ValidationErrors | null {
  let { value } = control;
  value = String(value);
  if (!value) {
    return null;
  }

  const isValid = /^[A-Za-z0-9]{5,20}$/.test(value);
  return isValid ? null : { usernameValidator: true };
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
