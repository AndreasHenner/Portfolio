import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Code, der nur im Browser-Kontext ausgeführt wird

      setInterval(() => {
        let currentInnerWidth = window.innerWidth;
        if (currentInnerWidth <= 550) {
          this.hideHeader = true;
        } else {
          this.hideHeader = false;
        }
      }, 100);
    }
  }

  toggleBurgerMenu(burgerMenuActive: any) {
    this.burgerMenuActive = !this.burgerMenuActive;
  }

  closeBurgerMenuWithLinks(burgerMenuActive: any) {
    this.burgerMenuActive = true;
    this.toggleBurgerMenu(this.burgerMenuActive);
  }

  ngOnInit() {}
  
  germanActivated = false;

  toggleLanguage(id: any) {
    this.germanActivated = !this.germanActivated;
    console.log(this.germanActivated);
    this.headerTranslate(id);
  }

  headerTranslate(id: any) {
    let aboutMeLink: any = document.getElementById('aboutMe1');
    let skillSetLink: any = document.getElementById('skillSet1');
    let myWorkLink: any = document.getElementById('myWork1');

    if (id === 'en') {
      aboutMeLink.textContent = 'About me';
      skillSetLink.textContent = 'Skill set';
      myWorkLink.textContent = 'My work';
    }
    if (id === 'de') {
      aboutMeLink.textContent = 'Über mich';
      skillSetLink.textContent = 'Fähigkeiten';
      myWorkLink.textContent = 'Meine Projekte';
    }
  }
}
