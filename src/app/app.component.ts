import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './main-content/header/header.component';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    ImprintComponent,
    HeaderComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit  {
  title = 'portfolio';
  hideHeader = false;
  imprintClicked: boolean = false;

  openImprint() {
    this.imprintClicked = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    AOS.init({
      duration: 1800,
      offset: -100,
    });
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 20);
  }
}
