import React from 'react';
import { usePresenter } from '@neonjs/react';

import { ContactDetailsPresenter } from '../presentation/contactDetailsPresenter';

export const ContactDetails: React.FC = () => {
  const presenter = usePresenter(ContactDetailsPresenter);

  return (
    <div className="card flex-1 ml-4 p-3" style={{ height: '400px' }}>
      {presenter.contact ? (
        <>
          <h5>{`${presenter.contact?.id} - ${presenter.contact?.name}`}</h5>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                value={presenter.contact?.name}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={presenter.contact?.email}
              />
            </div>

            <div className="form-group">
              <label>Phone #</label>
              <input
                type="phone"
                className="form-control"
                value={presenter.contact?.phone ?? ''}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        'Select a contact'
      )}
    </div>
  );
};
