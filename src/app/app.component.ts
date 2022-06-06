import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'opstream-assignment';
  toolbarOptions: string[] = [
    'new',
    'past',
    'comments',
    'ask',
    'show',
    'jobs',
    'submit',
  ];
  footerOptions: string[] = [
    'Guidelines',
    'FAQ',
    'Lists',
    'API',
    'Security',
    'Legal',
    'Apply to YC',
    'Contact',
  ];
}
