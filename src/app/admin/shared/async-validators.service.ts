import { Injectable } from '@angular/core';
/*BS*/import { AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';/*BE*/

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorsService {

  constructor(/*BS*/private service: BookStoreService/*BE*/) { }

  /*BS*/isbnExists(): AsyncValidatorFn {
    return (control) => {
      return this.service.check(control.value).pipe(
        map(exists => exists ? { isbnexists: true } : null)
      );
    }
  }/*BE*/
}
