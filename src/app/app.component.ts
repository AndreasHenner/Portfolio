import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorkTitleComponent } from './my-work-title/my-work-title.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImprintComponent } from './imprint/imprint.component';


@Component({
  selector: 'app-root',
  standalone: true,

 
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TitleSectionComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkTitleComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    ImprintComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent  {
  title = 'portfolio';
  hideHeader = false;
  imprintClicked: boolean = false;

  openImprint() {
    this.imprintClicked = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

