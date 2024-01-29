import { Component } from '@angular/core';
import { LanguageService } from './../../language.service';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
 
})
export class AboutMeComponent {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
  }

  translate() {
    let textAboutMe: any = document.getElementById('textAboutMe');
    let h1: any = document.getElementById('h1');
    let buttonMessage: any = document.getElementById('buttonMessage');
    let title: any = document.getElementById('title');

    if (this.germanActivated) {
      textAboutMe.textContent = 'Hallo, ich bin ein Junior Frontend-Entwickler und mein Name ist Andreas Henner aus Laupheim bei Ulm. Mein Focus liegt auf Programmiersprachen, insbesondere auf vertieften Kenntnissen in JavaScript und TypeScript. Zusätzlich habe ich Erfahrung mit HTML, CSS zur Erstellung von responsiven Benutzeroberflächen. Ich bin motiviert, ständig neue Technologien zu erlernen und innovative Lösungen zu entwickeln, was mich zu einem großartigen Teamplayer macht. Ich genieße die effektive Zusammenarbeit und den Beitrag zu kreativen Lösungen in einem Team. Ich strebe danach, mein Wissen zu vertiefen und aktiv an Projekten teilzunehmen, um praktische Erfahrungen zu sammeln. Ich bin derzeit auf der Suche nach einem inspirierenden Umfeld, um meine Fähigkeiten weiterzuentwickeln. Wenn Sie glauben, dass ich gut zu Ihren Projekten passe, kontaktieren Sie mich! ';
      h1.textContent = 'ENTWICKLER';
      buttonMessage.textContent = 'Sende eine Nachricht';
      title.textContent = 'Lassen Sie uns zusammen arbeiten';
    }
    if (!this.germanActivated) {
      textAboutMe.textContent = 'Hello, I am an aspiring junior Frontend developer and my name is Andreas Henner based in Laupheim near Ulm.  My focus is on programming languages, particularly on in-depth knowledge of JavaScript and TypeScript.  Additionally, I have experience with HTML, CSS for creating responsive user interfaces.  I am motivated to constantly learn new technologies and develop innovative solutions,  making me a great team player. I enjoy effective collaboration and contribution to creative solutions in a team. I strive to deepen my knowledge and actively participate in projects to gain hands-on experience. I am currently looking for an inspiring environment to further develop my skills. If you think I’d be a good match for your projects, contact me!';
      h1.textContent = 'DEVELOPER';
      buttonMessage.textContent = 'Send a message';
      title.textContent = 'Let´s work togehter';
    }
  }

}
