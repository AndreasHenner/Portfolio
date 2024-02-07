import { Component, inject } from '@angular/core';
import { LanguageService } from './../../language.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  germanActivated: boolean = false;
  http = inject(HttpClient);

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.germanActivated$.subscribe((value) => {
      this.germanActivated = value;
      this.translate();
    });
    this.setValidation();
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
      textContact.textContent =
        'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, Ihnen zuzuhören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.';
      text2Contact.textContent =
        'Sie brauchen einen Webentwickler? Kontaktieren Sie mich!';
      buttonContact.textContent = 'Hallo ;)';
      namePlaceholder.placeholder = 'Ihr Name';
      mailPlaceholder.placeholder = 'Ihre email';
      textPlaceholder.placeholder = 'Ihre Nachricht';
    }
    if (!this.germanActivated) {
      h1Contact.textContent = 'Contact';
      h2Contact.textContent = 'Got a problem to solve?';
      textContact.textContent =
        'Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.';
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
  
 emptyInputs() {
    let nameInput = document.getElementById('nameInput') as HTMLInputElement;
    let emailInput = document.getElementById('emailInput') as HTMLInputElement;
    let textareaInput = document.getElementById('textareaInput') as HTMLTextAreaElement;
    let checkbox: any = document.querySelector('.checkbox');
    nameInput.value = '';
    emailInput.value = '';
    textareaInput.value = '';
    checkbox.checked = false;
    this.showSucess();
  }

  showSucess() {
      let sucess:any  = document.getElementById('sucess');
      sucess.classList.add('sucess');
      sucess.textContent = 'successfully sent';
      setTimeout(() => {
        sucess.textContent = '';
      }, 3000);
  }

  showError() {
       // Wenn das Formular ungültig ist, zeige eine Fehlermeldung an oder handle es entsprechend
       let error:any  = document.getElementById('error');
       error.textContent = 'please fill in all fields';
       setTimeout(() => {
         error.textContent = '';
       }, 3000);
   }
   
   formValid = false;

   setValidation() {
    let nameInput = document.getElementById('nameInput') as HTMLInputElement;
    let emailInput = document.getElementById('emailInput') as HTMLInputElement;
    let textareaInput = document.getElementById('textareaInput') as HTMLTextAreaElement;
    let checkbox: HTMLInputElement = document.querySelector('.checkbox') as HTMLInputElement;
    
    setInterval(() => {
        if (nameInput && emailInput && textareaInput && checkbox) {
            // Überprüfe, ob alle Eingabefelder nicht leer sind und die Checkbox ausgewählt ist
            if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && textareaInput.value.trim() !== '' && checkbox.checked) {
                this.formValid = true;
            } else {
            }
        }
    }, 100); 
}
  
  sendMail() {
    // Zugriff auf das Formular über das Template-Referenzobjekt
    let form = document.getElementById('contactForm') as HTMLFormElement;
    // Überprüfen, ob das Formular gültig ist
    if (form.checkValidity()) {
        this.formValid = true;
        // Wenn das Formular gültig ist, führe den Versand aus
        var formData = new FormData(form);
        // Fetch API um die E-Mail zu senden
        this.emptyInputs();
        fetch(form.action, {
            method: 'POST',
            body: formData
        }) 
        .then(response => {
            if (response.ok) {
                // Zurücksetzen des Formulars nach erfolgreicher Sendung
                setTimeout(() => {
                    form.reset();
                }, 2000);
            } 
        })
        .catch(error => {
            console.error('Fehler beim Senden der E-Mail:', error);
            alert('Fehler beim Senden der E-Mail.');
        });
    } else {
     this.showError();
    }
  }
}
