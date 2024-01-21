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
    ContactComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent  {
  title = 'portfolio';
  hideHeader = false;
}

