import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../contacts.service";
import { Contact } from "../models/contact";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contactsService: ContactsService;

  contacts: Contact[];

  constructor(contactsService: ContactsService) {
    this.contactsService = contactsService;
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}