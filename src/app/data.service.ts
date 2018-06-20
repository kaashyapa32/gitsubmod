import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private isloggedIn: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  getStatus(): Observable<Boolean> {
    return this.isloggedIn.asObservable();
  }

  setStatus(value: Boolean) {
    this.isloggedIn.next(value);
  }

}
