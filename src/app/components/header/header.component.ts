import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl: string = './assets/images/logo/logo.svg';

  mainPageUrl: string = '';
  notesPageUrl: string = 'notes';
  tagsUrl: string = 'tags';
  remindersPageUrl: string = 'reminders';
}
