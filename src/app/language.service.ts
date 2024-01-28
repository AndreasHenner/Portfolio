import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public germanActivated = false;

  constructor() {}

  setGermanActivated(value: boolean) {
    this.germanActivated = value;
    console.log('German Activated in Service Section:', this.germanActivated);
  }

  getGermanActivated(): boolean {
    return this.germanActivated;
  }
}
