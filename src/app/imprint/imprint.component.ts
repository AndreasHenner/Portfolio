import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  @Input() imprintClicked: boolean = false;
  
constructor() {

}

closeImprint() {
  this.imprintClicked = false;
}
}
