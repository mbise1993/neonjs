import { FormPresenter } from '@neonjs/core';
import { inject, injectable } from 'inversify';

import { ContactDetailsForm } from './contactDetailsForm';
import { ContactService } from '../services/contactService';

@injectable()
export class ContactDetailsPresenter extends FormPresenter<ContactDetailsForm> {
  constructor(@inject(ContactService) private _contactService: ContactService) {
    super(new ContactDetailsForm());

    this.setStateFromActiveContact();

    _contactService.events.on('activeContactChanged', () =>
      this.setState(() => this.setStateFromActiveContact()),
    );
  }

  async onSubmit() {
    this._contactService.updateContact({
      id: this.form.id,
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
    });
  }

  private setStateFromActiveContact() {
    this.form.id = this._contactService.activeContact?.id ?? 0;
    this.form.name = this._contactService.activeContact?.name ?? '';
    this.form.email = this._contactService.activeContact?.email ?? '';
    this.form.phone = this._contactService.activeContact?.phone ?? '';
  }
}
