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

  toggleBurgerMenu(burgerMenuActive:any) {
    this.burgerMenuActive = !this.burgerMenuActive;
  }

  closeBurgerMenuWithLinks(burgerMenuActive:any) {
    this.burgerMenuActive = true;
    this.toggleBurgerMenu(this.burgerMenuActive)
  }

  ngOnInit() {
  }
}
