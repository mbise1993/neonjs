import { inject, injectable } from 'inversify';
import { Presenter } from '@neonjs/react';

import { ContactService } from '../services/contactService';

@injectable()
export class ContactListPresenter extends Presenter {
  constructor(@inject(ContactService) private _contactService: ContactService) {
    super();

    _contactService.events.onMany({
      activeContactChanged: () => this.setState(() => {}),
      contactsChanged: () => this.setState(() => {}),
    });
  }

  get contacts() {
    return this._contactService.contacts;
  }

  get activeContact() {
    return this._contactService.activeContact;
  }

  setActiveContact(id: number) {
    this._contactService.setActiveContact(id);
  }

  deleteContact(id: number) {
    this._contactService.deleteContact(id);
  }
}
