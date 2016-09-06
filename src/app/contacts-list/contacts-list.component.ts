import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Contact[]>;

  private terms$: Subject<string> = new Subject<string>();

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();

    this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((term) => this.search(term));
  }

  private search(term: string) {
    this.contacts = this.contactsService.search(term);
  }

}
