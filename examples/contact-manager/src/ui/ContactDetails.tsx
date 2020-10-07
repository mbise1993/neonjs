import React from 'react';
import { usePresenter } from '@neonjs/react';

import { ContactDetailsPresenter } from '../presentation/contactDetailsPresenter';

export const ContactDetails: React.FC = () => {
  const presenter = usePresenter(ContactDetailsPresenter);

  return (
    <div className="card flex-1 ml-4 p-3" style={{ height: '400px' }}>
      {presenter.id ? (
        <>
          <h5>{`${presenter.id} - ${presenter.name}`}</h5>
          <div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                value={presenter.name}
                onChange={(e) => presenter.setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={presenter.email}
                onChange={(e) => presenter.setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone #</label>
              <input
                type="phone"
                className="form-control"
                value={presenter.phone}
                onChange={(e) => presenter.setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary"
                onClick={() => presenter.submit()}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      ) : (
        'Select a contact'
      )}
    </div>
  );
};
