import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-work-title',
  standalone: true,
  imports: [],
  templateUrl: './my-work-title.component.html',
  styleUrl: './my-work-title.component.scss',
})

export class MyWorkTitleComponent {

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
