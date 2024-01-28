import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../../language.service';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss',
})
export class TitleSectionComponent implements OnInit {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      if (this.germanActivated) {
        this.translateTitle();
      }
    });
  }
  translateTitle() {
    let h2: any = document.getElementById('h2');
    let h1: any = document.getElementById('h1');
    h2.textContent = 'Hallo! ich bin Andy';
    h1.textContent = 'Entwickler';
  }
}
