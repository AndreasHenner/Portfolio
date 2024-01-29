import { Component, Input } from '@angular/core';
import { LanguageService } from './../../language.service';

@Component({
  selector: 'app-my-work-title',
  standalone: true,
  imports: [],
  templateUrl: './my-work-title.component.html',
  styleUrl: './my-work-title.component.scss',
})

export class MyWorkTitleComponent {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
  }

  translate() {
    if (this.germanActivated) {
      let myWorkTitle: any = document.getElementById('myWorkTitle');
      let myWorkText: any = document.getElementById('myWorkText');
      myWorkTitle.textContent = 'Meine Projekte';
      myWorkText.textContent = 'Hier finden Sie eine Auswahl meiner Arbeiten - bitte probieren Sie sie aus.';
      
    }
    if (!this.germanActivated) {
      let myWorkTitle: any = document.getElementById('myWorkTitle');
      let myWorkText: any = document.getElementById('myWorkText');
      myWorkTitle.textContent = 'My work';
      myWorkText.textContent = 'Here you find a sample of my work - please feel free to try them out.';
    }
  }

  javascriptActive = false;
  angularActive = false;
  firebaseActive = false;

  filterProjects(id: string) {
    if (id === 'javascript') {
      this.javascriptActive = true;
      this.angularActive = false; // Setze angularActive und firebaseActive auf false
      this.firebaseActive = false;
    } else if (id === 'angular') {
      this.angularActive = true;
      this.javascriptActive = false; // Setze javascriptActive und firebaseActive auf false
      this.firebaseActive = false;
    } else if (id === 'firebase') {
      this.firebaseActive = true;
      this.javascriptActive = false; // Setze javascriptActive und angularActive auf false
      this.angularActive = false;
    } else if (id === 'all') {
      this.firebaseActive = false;
      this.javascriptActive = false; 
      this.angularActive = false;
    }
  }

}
