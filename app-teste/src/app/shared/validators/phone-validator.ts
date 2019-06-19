import { AbstractControl } from '@angular/forms';

export function phoneValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\(\d{2,}\)\s?\d{4,}\-\d{4}$/.test(control.value);
    return valid ? null: {invalidNumber: {valid: false, value: control.value}};
}