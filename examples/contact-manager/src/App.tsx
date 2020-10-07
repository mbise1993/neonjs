import React from 'react';
import { ContactDetails } from './ui/ContactDetails';

import { ContactList } from './ui/ContactList';

export const App: React.FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-4">
        <h2 className="text-primary">NeonJS</h2>
        &nbsp;&nbsp;
        <h2 className="text-muted">Contact Manager</h2>
      </div>

      <div className="d-flex">
        <ContactList />
        <ContactDetails />
      </div>
    </div>
  );
};
