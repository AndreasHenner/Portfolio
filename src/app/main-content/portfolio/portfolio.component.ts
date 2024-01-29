import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import { LanguageService } from './../../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() title: string = '';
  id = '';
  germanActivated: boolean = false;
  

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1800,
      offset: -200,
    });

    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
  }

  translate() {
    if (this.germanActivated) {
      let buttonAll: any = document.getElementById('all');
      
      this.projects[0].description = 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.';
      this.projects[1].description = 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.';
      this.projects[2].description = 'Ein lustiges Kartenspiel, das Sie auch online mit Ihren Freunden spielen können. Sie ziehen abwechselnd eine Karte. Nach jedem Zug müssen Sie den angezeigten Hinweis befolgen.';
      this.projects[3].description = '...';
   
      buttonAll.textContent = 'Alle';
     
      
    }
    if (!this.germanActivated) {
      let buttonAll: any = document.getElementById('all');

      this.projects[0].description = 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.';
      this.projects[1].description = 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.';
      this.projects[2].description = 'A fun card game that you also can play online with your friends. You take it in turns to draw a card. After each move, you have to follow the displayed hint.';
      this.projects[3].description = '...';

      buttonAll.textContent = 'All';
    }
  }


  projects: any = [
    {
      image: 'assets/images/joinPortfolio.png',
      title: 'Join',
      type: 'Javascript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linklivetest: 'https://andreas-henner.com/Join/index.html',
      linkgithub: 'https://github.com/AndreasHenner/join',
    },

    {
      image: 'assets/images/polloLoco.png',
      title: 'El Pollo Loco',
      type: 'Javascript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      linklivetest: 'https://andreas-henner.com/El%20Pollo%20Loco/index.html',
      linkgithub: 'https://github.com/AndreasHenner/El-Pollo-Loco',
    },

    {
      image: 'assets/images/ringoffire.jpg',
      title: 'Ring of fire',
      type: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'A fun card game that you also can play online with your friends. You take it in turns to draw a card. After each move, you have to follow the displayed hint.',
      linklivetest: 'https://andreas-henner.com/Ringoffire/index.html',
      linkgithub: 'https://github.com/AndreasHenner/ringoffire',
    },

    {
      image: 'assets/images/questionmark.jpg',
      title: '4. Project',
      type: '...',
      description: '...',
      linklivetest: '',
      linkgithub: '',
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }

  openGithub(i: any): void {
    let github = this.projects[i].linkgithub;
    window.open(github);
  }

  openLivetest(i: any): void {
    let livetest = this.projects[i].linklivetest;
    window.open(livetest);
  }

  getProjectImage(project: any): string {
    // Ändere die Bildquelle basierend auf Bedingungen
    if (
      window.innerWidth < 750 &&
      project.image === 'assets/images/ringoffire.jpg'
    ) {
      return 'assets/images/ringOfFireLittle.png'; // Bildquelle für kleine Bildschirme
    } else {
      return project.image; // Standardbildquelle
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
