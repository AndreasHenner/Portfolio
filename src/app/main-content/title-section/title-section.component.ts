import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../../language.service';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'

})
export class TitleSectionComponent implements OnInit {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.germanActivated = this.languageService.getGermanActivated();
    console.log('German Activated in Title Section:', this.germanActivated);
  }

  titleTranslate() {
    if (this.germanActivated) {
      console.log('title:', this.germanActivated);
    }
  }
}
