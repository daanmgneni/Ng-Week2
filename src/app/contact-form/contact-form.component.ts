import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  submissionMessage: string = '';

  onSubmit(formData: any) {
    console.log('Form data submitted:', formData);
    // In a real application, you would send this data to a server
    // using a service (e.g., an HTTP service).

    // For this example, let's just display a success message.
    this.submissionMessage = 'Your message has been submitted successfully!';

    // Optionally, you can reset the form after submission:
    // (contactForm.resetForm(); - requires access to the NgForm instance)
  }
}