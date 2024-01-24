import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  emptyInputfields() {
    let nameInput: HTMLInputElement | null = document.getElementById('nameInput') as HTMLInputElement;
    let emailInput: HTMLInputElement | null = document.getElementById('emailInput') as HTMLInputElement;
    let textareaInput: HTMLTextAreaElement | null = document.getElementById('textareaInput') as HTMLTextAreaElement;

    nameInput.value = '';
    emailInput.value = '';
    textareaInput.value = '';
  }
}
