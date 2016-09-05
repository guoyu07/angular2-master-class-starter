import { Component } from '@angular/core';
import { Contact } from "./models/contact";

@Component({
  selector: 'trm-contacts-app',
  template: `
<trm-contacts-header></trm-contacts-header>
<ul class="collection">
  <li class="collection-item avatar">
    <img [src]=[contact.image] alt="" class="circle">
    <span class="title">{{contact.name}}</span>
  </li>
</ul>
`,
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  contact: Contact = {
    id: 7,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/7.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  }
}
