import React from 'react';
import { usePresenter } from '@neonjs/react';

import { ContactListPresenter } from '../presentation/contactListPresenter';

export const ContactList: React.FC = () => {
  const presenter = usePresenter(ContactListPresenter);

  return (
    <ul className="list-group flex-1">
      {presenter.contacts.map((contact) => (
        <a
          key={contact.id}
          className={`list-group-item list-group-item-action ${
            contact.id === presenter.activeContact?.id ? 'active' : ''
          }`}
          href="#"
          onClick={() => presenter.setActiveContact(contact.id)}
        >
          {contact.name}
        </a>
      ))}
    </ul>
  );
};
