import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';


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

  projects: any = [
    {
      image: 'assets/images/joinPortfolio.png',
      title: 'Join',
      type: 'Angular | Typescript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linklivetest:'https://andreas-henner.com/Join/index.html',
      linkgithub: 'https://github.com/AndreasHenner/Join624',
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
      description:
        'A fun card game that you also can play online with your friends. You take it in turns to draw a card. After each move, you have to follow the displayed hint.',
      linklivetest: '',
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

  ngOnInit(): void {
    AOS.init({
      duration: 1500,
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  openGithub(i: any): void {
    let github = this.projects[i].linkgithub;
    window.open(github);
  }

  openLivetest(i: any): void {
    let livetest = this.projects[i].linklivetest;
    window.open(livetest);
  }
}