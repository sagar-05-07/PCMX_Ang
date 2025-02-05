import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

function duplicateValidator(existingValues: any[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (existingValues && existingValues.includes(control.value)) {
            return { 'duplicate': true };
        }
        return null;
    };
}


export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (!control || !matchingControl) {
            return;
        }
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    if (control.value) {
        // Check if the value contains at least one uppercase letter, one lowercase letter, and one digit
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            return { 'passwordStrength': true };
        }
    }
    return null;

}

export function numberValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    if (control.value) {
        // Check if the value contains at least one uppercase letter, one lowercase letter, and one digit
        if (!/^\d*\.?\d+$/.test(value)) {
            return { 'number': true };
        }
    }
    return null;

}



// export function numberValidator(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null => {
//         const input = control.value;
//         if (input === null || input === '') {
//             return null;
//         }
//         const regex = /^\d*\.?\d+$/;
//         const isValid = regex.test(input);
//         return isValid ? null : { 'number': { value: control.value } };
//     };
// }


export function upperCaseValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value as string;
        const upperCaseValue = value.toUpperCase();
        if (upperCaseValue !== value) {
            control.setValue(upperCaseValue);
        }
        return null;
    };
}


