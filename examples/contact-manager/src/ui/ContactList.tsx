import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePresenter } from '@neonjs/react';

import { ContactListPresenter } from '../presentation/contactListPresenter';

export const ContactList: React.FC = () => {
  const { id } = useParams();
  const presenter = usePresenter(ContactListPresenter);

  return (
    <ul className="list-group flex-1">
      {presenter.contacts.map((contact) => (
        <Link
          key={contact.id}
          className={`list-group-item list-group-item-action ${
            contact.id === id ? 'active' : ''
          }`}
          to={`/contacts/${contact.id}`}
        >
          {contact.name}
        </Link>
      ))}
    </ul>
  );
};
