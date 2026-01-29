import { Component } from '@angular/core';
import { Address, User } from './user';
import { EnrollmentService } from './enrollment.service';

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

  constructor(private _enrollmentService: EnrollmentService) {

  }

  validateTopic(topic: string = ''): void {
    // this.isTopicInvalid = topic === 'null'; // We can validate this using FormControl state also
    this.isTopicInvalid = this.userModel.topic === 'null';
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input value:', inputElement.value);
  }

  onSubmit(): void {
    // console.log('Form submitted!', this.userModel);

    this._enrollmentService
      .enroll(this.userModel)
      .subscribe(
        response => console.log('Success:', response),
        error => console.error('Error:', error)
      );
  }



}
