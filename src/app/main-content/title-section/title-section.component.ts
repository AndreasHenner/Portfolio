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
      this.translateTitle();
    });
  }


  translateTitle() {
    if (this.germanActivated) {
      let h2: any = document.getElementById('h2');
      let h1: any = document.getElementById('h1');
      h2.textContent = 'Hallo! Ich bin Andy';
      h1.textContent = 'ENTWICKLER';
    }
    if (!this.germanActivated) {
      let h2: any = document.getElementById('h2');
      let h1: any = document.getElementById('h1');
      h2.textContent = 'Hello! I am Andy';
      h1.textContent = 'DEVELOPER';
    }
  }
}
