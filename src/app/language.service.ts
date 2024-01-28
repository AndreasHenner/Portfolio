import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private germanActivatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public germanActivated$: Observable<boolean> = this.germanActivatedSubject.asObservable();

  constructor() {}

  setGermanActivated(value: boolean) {
    this.germanActivatedSubject.next(value);
  }

  getGermanActivated(): boolean {
    return this.germanActivatedSubject.value;
  }
}
