import { injectable } from 'inversify';
import { Presenter } from '@neonjs/core';

interface TodoItem {
  id: number;
  text: string;
  isDone: boolean;
}

@injectable()
export class TodoListPresenter extends Presenter {
  private _items: TodoItem[] = [];
  private _newItemText = '';

  get items() {
    return this._items;
  }

  get newItemText() {
    return this._newItemText;
  }

  updateNewItemText(value: string) {
    this.setState(() => {
      this._newItemText = value;
    });
  }

  addNewItem() {
    this.setState(() => {
      this._items.push({
        id: this.items.length + 1,
        text: this.newItemText,
        isDone: false,
      });

      this._newItemText = '';
    });
  }

  toggleItemDone(itemId: number) {
    const item = this.items.find((i) => i.id === itemId);
    if (!item) {
      return;
    }

    this.setState(() => {
      item.isDone = !item.isDone;
    });
  }

  deleteItem(itemId: number) {
    this.setState(() => {
      this._items = this._items.filter((item) => item.id !== itemId);
    });
  }
}
