export interface Disposable {
  dispose(): void;
}

export type AggregateDisposable<TKeys> = Disposable &
  Record<keyof TKeys, Disposable>;
