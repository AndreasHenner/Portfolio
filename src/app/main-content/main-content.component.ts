import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorkTitleComponent } from './my-work-title/my-work-title.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    TitleSectionComponent,
    AboutMeComponent,
    SkillSetComponent,
    ContactComponent,
    MyWorkTitleComponent,
    PortfolioComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
 
}
