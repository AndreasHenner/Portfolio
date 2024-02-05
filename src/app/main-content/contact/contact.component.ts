import { Component } from '@angular/core';
import { LanguageService } from './../../language.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  germanActivated: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
  }

  translate() {
    let h1Contact: any = document.getElementById('h1Contact');
    let h2Contact: any = document.getElementById('h2Contact');
    let textContact: any = document.getElementById('textContact');
    let text2Contact: any = document.getElementById('text2Contact');
    let buttonContact: any = document.getElementById('buttonContact');
    let namePlaceholder: any = document.getElementById('nameInput');
    let mailPlaceholder: any = document.getElementById('emailInput');
    let textPlaceholder: any = document.getElementById('textareaInput');


    if (this.germanActivated) {
      h1Contact.textContent = 'Kontakt';
      h2Contact.textContent = 'Sie haben ein Problem?';
      textContact.textContent = 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, Ihnen zuzuhören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.';
      text2Contact.textContent = 'Sie brauchen einen Webentwickler? Kontaktieren Sie mich!';
      buttonContact.textContent = 'Hallo ;)';
      namePlaceholder.placeholder = 'Ihr Name';
      mailPlaceholder.placeholder = 'Ihre email';
      textPlaceholder.placeholder = 'Ihre Nachricht';
    
    }
    if (!this.germanActivated) {
      h1Contact.textContent = 'Contact';
      h2Contact.textContent = 'Got a problem to solve?';
      textContact.textContent = 'Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.';
      text2Contact.textContent = 'Need a Frontend developer? Contact me!';
      buttonContact.textContent = 'Say hello ;)';
      namePlaceholder.placeholder = 'Your name';
      mailPlaceholder.placeholder = 'Your email';
      textPlaceholder.placeholder = 'Your message';

    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


   sendMail() {
    var form:any = document.getElementById('contactForm');
    var formData = new FormData(form);

    let nameInput = document.getElementById('nameInput') as HTMLInputElement;
    let emailInput = document.getElementById('emailInput') as HTMLInputElement;
    let textareaInput = document.getElementById('textareaInput') as HTMLTextAreaElement;
    let checkbox:any = document.querySelector('.checkbox');

    nameInput.value = '';
    emailInput.value = '';
    checkbox.checked = false;
    textareaInput.value = 'Email erfolgreich versendet';
    setTimeout(() => {
      textareaInput.value = '';
    }, 2000);

    // Fetch API um die E-Mail zu senden
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
          
            
            setTimeout(() => {
              form.reset();
              window.location.reload();
          }, 4000);
        } 
    })
    .catch(error => {
        console.error('Fehler beim Senden der E-Mail:', error);
        alert('Fehler beim Senden der E-Mail.');
    });
}
}
