import { injectable } from 'inversify';
import { Presenter } from '@neonjs/core';

@injectable()
export class CounterPresenter extends Presenter {
  private _count = 0;

  get count() {
    return this._count;
  }

  decrement() {
    this.setState(() => {
      this._count -= 1;
    });
  }

  increment() {
    this.setState(() => {
      this._count += 1;
    });
  }
}
