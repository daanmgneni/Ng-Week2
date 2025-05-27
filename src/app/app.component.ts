import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { ContactFormComponent } from './contact-form/contact-form.component'; // Import ContactFormComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    CommonModule,

    ContactFormComponent // Add ContactFormComponent to imports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'about-me-app';
}