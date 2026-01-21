import { Component } from '@angular/core';
import { Address, User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'React', 'Vue', 'Svelte'];
  address = new Address('', '', '');
  userModel = new User('', '', 0, this.address, 'null', '', false);
  isTopicInvalid: boolean = true;

  validateTopic(topic: string=''): void {
    // this.isTopicInvalid = topic !== 'null'; // We can validate this using FormControl state also
    this.isTopicInvalid = this.userModel.topic !== 'null';
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;    
    console.log('Input value:', inputElement.value);
  }


  
}
