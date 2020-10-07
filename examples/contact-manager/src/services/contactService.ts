import { injectable } from 'inversify';

import { emitterOf } from '../utils/emitter';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const initialContacts: Contact[] = [
  {
    id: 1,
    name: 'Matt B',
    email: 'mattb@email.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janed@email.com',
    phone: '123-456-7890',
  },
];

interface ContactServiceEvents {
  contactsChanged: {};
  activeContactChanged: {};
}

@injectable()
export class ContactService {
  private _contacts: Contact[] = initialContacts;
  private _activeContact: Contact | null = null;
  private _emitter = emitterOf<ContactServiceEvents>();

  get contacts() {
    return this._contacts;
  }

  get activeContact() {
    return this._activeContact;
  }

  get events() {
    return this._emitter.asReadOnly();
  }

  setActiveContact(id: number) {
    const contact = this._contacts.find((contact) => contact.id === id);
    if (!contact) {
      throw new Error(`Unable to find contact with ID: ${id}`);
    }

    this._activeContact = contact;
    this._emitter.emit('activeContactChanged', {});
  }

  deleteContact(id: number) {
    this._contacts = this._contacts.filter((item) => item.id !== id);
    this._emitter.emit('contactsChanged', {});
  }
}
