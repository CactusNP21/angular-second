import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  field = ''
  value = ''

  private filterSubject = new BehaviorSubject<{value: string, type: string}>({
    value: '',
    type: ''
  });

  sendFilter (filter: string, value: string) {
      this.filterSubject.next({
        value: filter,
        type: value
      })
  }

  sendFilterBy(filter: string) {
    this.field = filter
    this.sendFilter(this.value, this.field)
  }

  sendFilterValue(value: string) {
    this.value = value;
    this.sendFilter(this.value, this.field)
  }

  getFilter(): Observable<{value: string, type: string}> {
    return this.filterSubject.asObservable();
  }

}
