import React from 'react';
import { useParams } from 'react-router-dom';
import { usePresenter } from '@neonjs/react';

import { ContactDetailsPresenter } from '../presentation/contactDetailsPresenter';

export const ContactDetails: React.FC = () => {
  const { id } = useParams();
  const presenter = usePresenter(ContactDetailsPresenter);

  React.useEffect(() => {
    presenter.setContact(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    presenter.submit();
  };

  return (
    <div className="card flex-1 ml-4 p-3" style={{ height: '400px' }}>
      <h5>{`${presenter.form.name}`}</h5>
      {presenter.hasErrors && (
        <span className="text-danger pre-wrap">
          {presenter.combineErrors()}
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            value={presenter.form.name}
            onChange={(e) => presenter.setFormValue('name', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={presenter.form.email}
            onChange={(e) => presenter.setFormValue('email', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone #</label>
          <input
            type="phone"
            className="form-control"
            value={presenter.form.phone}
            onChange={(e) => presenter.setFormValue('phone', e.target.value)}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={presenter.isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
