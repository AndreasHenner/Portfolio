import { Component } from '@angular/core';
import { LanguageService } from './../../language.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
  }

  translate() {
    let skillSetTitle: any = document.getElementById('skillSetTitle');
    if (this.germanActivated) {
      skillSetTitle.textContent = 'Fähigkeiten';
    }
    if (!this.germanActivated) {
      skillSetTitle.textContent = 'Skill set';
    }
  }
}
