import { Presenter } from '@neonjs/react';

interface CounterState {
  count: number;
}

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
