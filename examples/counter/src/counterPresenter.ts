import { injectable } from 'inversify';
import { Presenter } from '@neonjs/react';

interface CounterState {
  count: number;
}

@injectable()
export class CounterPresenter extends Presenter<CounterState> {
  get count() {
    return this.state.count;
  }

  decrement() {
    this.setState({
      count: this.count - 1,
    });
  }

  increment() {
    this.setState({
      count: this.count + 1,
    });
  }
}
