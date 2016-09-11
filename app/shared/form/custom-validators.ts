import { FormControl } from '@angular/forms';

export class CustomValidators {

  static sfeirEmail(control: FormControl) {

    let regex = /^\w+\.\w@sfeir\.com$/;

    return regex.test(control.value) ? null : {
        sfeirEmail: true
    }
  }

}
