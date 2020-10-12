import { FormPresenter } from '@neonjs/core';
import { inject, injectable } from 'inversify';

import { Contact, ContactService } from '../services/contactService';
import { ContactDetailsForm } from './contactDetailsForm';

@injectable()
export class ContactDetailsPresenter extends FormPresenter<ContactDetailsForm> {
  constructor(@inject(ContactService) private _contactService: ContactService) {
    super(new ContactDetailsForm());
  }

  setContact(id: string) {
    const contact = this._contactService.getContact(id);
    if (!contact) {
      throw new Error(`No contact found with ID: ${id}`);
    }

    this.setState(() => this.setStateFromContact(contact));
  }

  async onSubmit() {
    this._contactService.updateContact({
      id: this.form.id,
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
    });
  }

  private setStateFromContact(contact: Contact) {
    this.form.id = contact.id;
    this.form.name = contact.name;
    this.form.email = contact.email;
    this.form.phone = contact.phone ?? '';
  }
}
