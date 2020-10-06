import { injectable } from 'inversify';
import { Presenter } from '@neonjs/react';

interface TodoListState {
  count: number;
}

@injectable()
export class TodoListPresenter extends Presenter<TodoListState> {
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
