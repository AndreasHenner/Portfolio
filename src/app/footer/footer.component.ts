import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from './../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
  }

  translate() {
    let imprint: any = document.getElementById('imprint');


    if (this.germanActivated) {
      imprint.textContent = 'Impressum';
    
    }
    if (!this.germanActivated) {
      imprint.textContent = 'Imprint';
   
      
    }
  }

  @Input() imprintClicked = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
