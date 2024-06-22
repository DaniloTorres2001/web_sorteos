import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteos',
  templateUrl: './sorteos.component.html',
  styleUrls: ['./sorteos.component.css']
})
export class SorteosComponent {
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) {
      inputElement.classList.add('has-content');
    } else {
      inputElement.classList.remove('has-content');
    }
  }

}
