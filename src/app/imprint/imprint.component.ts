import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from './../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NgClass],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
   
    });
  }
}

