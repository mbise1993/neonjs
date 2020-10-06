import { View } from './view';

export abstract class Presenter<TView extends View = View> {
  private _view!: TView;

  get view() {
    return this._view;
  }

  initialize(view: TView) {
    this._view = view;
  }

  setState(updateFn: () => void) {
    updateFn();
    this._view.update();
  }
}
