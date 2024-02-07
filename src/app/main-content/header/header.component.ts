import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from './../../language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  hideHeader = false;
  burgerMenuActive = false;
  @Input() imprintClicked = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private languageService: LanguageService) {
    if (isPlatformBrowser(this.platformId)) {
      // Code, der nur im Browser-Kontext ausgeführt wird

      setInterval(() => {
        let currentInnerWidth = window.innerWidth;
        if (currentInnerWidth <= 1350) {
          this.hideHeader = true;
        } else {
          this.hideHeader = false;
        }
      }, 100);
    }
  }

  toggleBurgerMenu(burgerMenuActive: any) {
    this.imprintClicked = false;
    this.burgerMenuActive = !this.burgerMenuActive;
  }

  closeBurgerMenuWithLinks(burgerMenuActive: any) {
    this.burgerMenuActive = true;
    this.toggleBurgerMenu(this.burgerMenuActive);
  }

  ngOnInit() {}

  germanActivated = false;

  toggleLanguage(id: any) {
    if (id === 'de1' || id === 'en1') {
      this.headerTranslate(id);
    } else {
      this.burgerMenuTranslate(id);
    }
  }

  headerTranslate(id: any) {
    let aboutMeLink: any = document.getElementById('aboutMe1');
    let skillSetLink: any = document.getElementById('skillSet1');
    let myWorkLink: any = document.getElementById('myWork1');

    if (id === 'en1') {
      this.germanActivated = false;
      this.languageService.setGermanActivated(false);
      aboutMeLink.textContent = 'About me';
      skillSetLink.textContent = 'Skill set';
      myWorkLink.textContent = 'My work';
    }
    if (id === 'de1') {
      this.germanActivated = true;
      this.languageService.setGermanActivated(true);
      aboutMeLink.textContent = 'Über mich';
      skillSetLink.textContent = 'Fähigkeiten';
      myWorkLink.textContent = 'Projekte';
    }
  }

  burgerMenuTranslate(id: any) {
    let aboutMeLink: any = document.getElementById('aboutMeBurger');
    let skillSetLink: any = document.getElementById('skillSetBurger');
    let myWorkLink: any = document.getElementById('myWorkBurger');
    let contactLink: any = document.getElementById('contactBurger');

    if (id === 'enBurger') {
      this.germanActivated = false;
      this.languageService.setGermanActivated(false);
      aboutMeLink.textContent = 'About me';
      skillSetLink.textContent = 'Skill set';
      myWorkLink.textContent = 'My work';
      contactLink.textContent = 'Contact';
    }
    if (id === 'deBurger') {
      this.germanActivated = true;
      this.languageService.setGermanActivated(true);
      aboutMeLink.textContent = 'Über mich';
      skillSetLink.textContent = 'Fähigkeiten';
      myWorkLink.textContent = 'Projekte';
      contactLink.textContent = 'Kontakt';
    }
  }
}
