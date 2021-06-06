import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isToggled: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  toggleAddTask() {
    this.isToggled = !this.isToggled;
    this.subject.next(this.isToggled);
  }
}
