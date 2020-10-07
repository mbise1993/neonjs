import { inject, injectable } from 'inversify';
import { Presenter } from '@neonjs/react';

import { ContactService } from '../services/contactService';

@injectable()
export class ContactDetailsPresenter extends Presenter {
  constructor(@inject(ContactService) private _contactService: ContactService) {
    super();

    _contactService.events.on('activeContactChanged', () => {
      this.setState(() => {});
    });
  }

  get contact() {
    return this._contactService.activeContact;
  }
}
