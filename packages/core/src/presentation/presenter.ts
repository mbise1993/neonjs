import { Disposable } from '../util/disposable';
import { View } from './view';

export abstract class Presenter<TView extends View = View> {
  private _disposables: Disposable[] = [];

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

  trackDisposable(disposable: Disposable) {
    this._disposables.push(disposable);
  }

  dispose() {
    this._disposables.forEach((disposable) => disposable.dispose());
    this._disposables = [];
  }
}
