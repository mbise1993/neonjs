import { View } from './view';

export class Presenter<TState extends {}, TView extends View = View> {
  private _view!: TView;
  private _state!: TState;

  initialize(view: TView, state: TState) {
    this._view = view;
    this._state = state;
  }

  get state(): TState {
    return this._state;
  }

  setState(value: Partial<TState>) {
    this._state = {
      ...this._state,
      ...value,
    };

    this._view.update();
  }
}
