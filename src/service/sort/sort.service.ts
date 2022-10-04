import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Board} from "../../models/boardModel";

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private subject = new BehaviorSubject<any>('');

  sendSortField(field: string) {
    this.subject.next(field)
  }

  getSortField(): Observable<string> {
    return this.subject.asObservable()
  }

  constructor() {
  }
}
