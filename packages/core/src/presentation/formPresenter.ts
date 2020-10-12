import { validate as cvValidate } from 'class-validator';

import { Presenter } from './presenter';

type Errors<TForm> = Partial<Record<keyof TForm, string>>;

export abstract class FormPresenter<TForm> extends Presenter {
  private _isSubmitting = false;
  private _errors: Errors<TForm> = {};

  constructor(private _form: TForm) {
    super();
  }

  get form() {
    return this._form;
  }

  get isSubmitting() {
    return this._isSubmitting;
  }

  get errors() {
    return this._errors;
  }

  get hasErrors() {
    return Object.keys(this._errors).length > 0;
  }

  setFormValue<TKey extends keyof TForm>(key: TKey, value: TForm[TKey]) {
    this.setState(() => {
      this._form[key] = value;
    });
  }

  combineErrors(separator = '\n') {
    const errorValues = Object.values(this._errors);
    return errorValues.length === 0 ? null : errorValues.join(separator);
  }

  async submit() {
    this.setState(() => {
      this._isSubmitting = true;
    });

    const validationErrors = await cvValidate(this._form);
    if (validationErrors.length === 0) {
      await this.onSubmit();
      this.setState(() => {
        this._errors = {};
        this._isSubmitting = false;
      });
    } else {
      this.setState(() => {
        this._errors = validationErrors.reduce((acc, error) => {
          return {
            ...acc,
            [error.property]: Object.values(error.constraints ?? {}).join(', '),
          };
        }, {});

        this._isSubmitting = false;
      });
    }
  }

  abstract onSubmit(): Promise<void>;
}
