import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface SocialLink {
  platform: string;
  url: string;
  icon: string; // font-awesome or assets icon path
}

@Component({
  selector: 'app-contact',
  imports:[CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = 'contact@typedynamics.com';

  socialLinks: SocialLink[] = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/typedynamics',
      icon: 'fab fa-facebook-f'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/typedynamics',
      icon: 'fab fa-twitter'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/typedynamics',
      icon: 'fab fa-linkedin-in'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/typedynamics',
      icon: 'fab fa-github'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/typedynamics',
      icon: 'fab fa-instagram'
    }
  ];
}