import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleService {

  constructor() {
    console.log('created');
  }
  private name:BehaviorSubject<String> = new BehaviorSubject<String>("Initial");

  getName(): Observable<String> {
    return this.name.asObservable(); 
  }

  setName(name:String) {
    this.name.next(name);
  }

}
