import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'React', 'Vue', 'Svelte'];
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input value:', inputElement.value);
  }

}
