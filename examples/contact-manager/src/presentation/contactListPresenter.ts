import { inject, injectable } from 'inversify';
import { Presenter } from '@neonjs/core';

import { ContactService } from '../services/contactService';

@injectable()
export class ContactListPresenter extends Presenter {
  constructor(@inject(ContactService) private _contactService: ContactService) {
    super();

    this.trackDisposable(
      _contactService.events.on('contactsChanged', () =>
        this.setState(() => {}),
      ),
    );
  }

  get contacts() {
    return this._contactService.contacts;
  }

  deleteContact(id: string) {
    this._contactService.deleteContact(id);
  }
}
