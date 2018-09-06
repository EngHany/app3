import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StreamService {
  dataStream: Observable<string>;
  dataStream2: Observable<string>;
  constructor() { }
  createStream() {
    this.dataStream = new Observable(observable => {
      setTimeout(() => {
        observable.next('value1');
      }, 1000);
      setTimeout(() => {
        observable.next("value2");
      }, 3000);
      setTimeout(() => {
        observable.next("value3");
      }, 5000);
      setTimeout(() => {
        observable.complete();
      }, 7000);
      setTimeout(() => {
        observable.next('value4');
      }, 8000);
    })
    return this.dataStream;
  }
  createStream2() {
    this.dataStream2 = new Observable(observable => {
      setTimeout(() => {
        observable.next("value1");
      }, 1000);
      setTimeout(() => {
        observable.next("value2");
      }, 3000);
      setTimeout(() => {
        observable.error("some errors occured");
      }, 5000);
      setTimeout(() => {
        observable.complete();
      }, 7000);
      setTimeout(() => {
        observable.next('value4');
      }, 8000);
    })
    return this.dataStream2;
  }
}
