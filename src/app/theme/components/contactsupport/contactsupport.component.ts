import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactsupport',

  templateUrl: './contactsupport.component.html',
  styleUrl: './contactsupport.component.scss'
})
export class ContactsupportComponent {
  email: string = 'JohnDoe@chartx.com';
}
