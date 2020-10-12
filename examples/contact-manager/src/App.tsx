import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ContactDetails } from './ui/ContactDetails';
import { ContactList } from './ui/ContactList';
import { NoContactSelected } from './ui/NoContactSelected';

export const App: React.FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-4">
        <h2 className="text-primary">NeonJS</h2>
        &nbsp;&nbsp;
        <h2 className="text-muted">Contact Manager</h2>
      </div>

      <Routes>
        <Route path="contacts">
          <div className="d-flex">
            <ContactList />
            <NoContactSelected />
          </div>
        </Route>
        <Route path="contacts/:id">
          <div className="d-flex">
            <ContactList />
            <ContactDetails />
          </div>
        </Route>
        <Route path="*">
          <Navigate to="/contacts" />
        </Route>
      </Routes>
    </div>
  );
};
