import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule,ReversePipe],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  submissionMessage: string = '';
  submittedName: string = '';

  onSubmit(formData: any) {
    console.log('Form data submitted:', formData);
    this.submittedName = formData.name; // Store the submitted name
    this.submissionMessage = 'Your message has been submitted successfully!';
  }
}