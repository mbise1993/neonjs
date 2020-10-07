import { inject, injectable } from 'inversify';
import { Presenter } from '@neonjs/react';

import { ContactService } from '../services/contactService';

@injectable()
export class ContactDetailsPresenter extends Presenter {
  name!: string;
  email!: string;
  phone!: string;

  constructor(@inject(ContactService) private _contactService: ContactService) {
    super();

    this.populateState();

    _contactService.events.on('activeContactChanged', () =>
      this.setState(() => this.populateState()),
    );
  }

  get id() {
    return this._contactService.activeContact?.id;
  }

  setName(value: string) {
    this.setState(() => {
      this.name = value;
    });
  }

  setEmail(value: string) {
    this.setState(() => {
      this.email = value;
    });
  }

  setPhone(value: string) {
    this.setState(() => {
      this.phone = value;
    });
  }

  submit() {
    if (!this.id) {
      return;
    }

    this._contactService.updateContact({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
    });
  }

  private populateState() {
    this.name = this._contactService.activeContact?.name ?? '';
    this.email = this._contactService.activeContact?.email ?? '';
    this.phone = this._contactService.activeContact?.phone ?? '';
  }
}
