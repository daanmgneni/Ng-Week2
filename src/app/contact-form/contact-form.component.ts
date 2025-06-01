import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup ;
  submissionMessage: string = '';

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Reactive Form submitted:', this.contactForm.value);
      this.submissionMessage = 'Your message has been submitted successfully (Reactive)!';
      this.contactForm.reset(); // Reset the form after submission
    } else {
      // Trigger validation to display errors
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
          control.updateValueAndValidity();
        }
      });
    }
  }

  get nameControl() {
    return this.contactForm.controls['name'];
  }

  get emailControl() {
    return this.contactForm.controls['email'];
  }

  get messageControl() {
    return this.contactForm.controls['message'];
  }
}