import { emitterOf } from '@neonjs/core';
import { injectable } from 'inversify';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'Matt B',
    email: 'mattb@email.com',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janed@email.com',
    phone: '123-456-7890',
  },
];

interface ContactServiceEvents {
  contactsChanged: {};
}

@injectable()
export class ContactService {
  private _contacts: Contact[] = initialContacts;
  private _emitter = emitterOf<ContactServiceEvents>();

  get contacts() {
    return this._contacts;
  }

  get events() {
    return this._emitter.asReadOnly();
  }

  getContact(id: string) {
    return this._contacts.find((contact) => contact.id === id);
  }

  updateContact(value: Contact) {
    this._contacts = this._contacts.map((contact) =>
      contact.id === value.id ? value : contact,
    );

    this._emitter.emit('contactsChanged', {});
  }

  deleteContact(id: string) {
    this._contacts = this._contacts.filter((item) => item.id !== id);
    this._emitter.emit('contactsChanged', {});
  }
}
