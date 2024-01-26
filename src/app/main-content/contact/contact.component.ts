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
    let nameInput = document.getElementById('nameInput') as HTMLInputElement;
    let emailInput = document.getElementById('emailInput') as HTMLInputElement;
    let textareaInput = document.getElementById('textareaInput') as HTMLTextAreaElement;

    setTimeout(() => {
    nameInput.value = '';
    emailInput.value = '';
    textareaInput.value = '';
},1000) 
  
  }

}
