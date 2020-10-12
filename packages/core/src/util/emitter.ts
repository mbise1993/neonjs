import { AggregateDisposable, Disposable } from './disposable';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Handle<TPayload> = (payload: TPayload) => void;

type EventDefinitions = Record<string, any>;

type EventHandlers<TEvents extends EventDefinitions> = {
  [event in keyof TEvents]: Handle<TEvents[event]>;
};

interface Subscriber<TPayload> {
  id: number;
  handle: Handle<TPayload>;
}

interface SubscriberMap {
  [id: number]: Subscriber<any>;
}

export interface ReadOnlyEmitter<TEvents extends EventDefinitions> {
  on<TEvent extends keyof TEvents>(
    event: TEvent,
    handle: Handle<TEvents[TEvent]>,
  ): Disposable;
  on<THandlers extends Partial<EventHandlers<TEvents>>>(
    handlers: THandlers,
  ): AggregateDisposable<THandlers>;
}

export class Emitter<TEvents extends EventDefinitions> {
  private currentSubscriberId = 1;
  private subscribersByEvent: Partial<
    Record<keyof TEvents, SubscriberMap>
  > = {};

  emit<TEvent extends keyof TEvents>(event: TEvent, payload: TEvents[TEvent]) {
    const subscribers = Object.values(this.subscribersByEvent[event] ?? {});
    subscribers.forEach((subscriber) => {
      subscriber.handle(payload);
    });
  }

  on<TEvent extends keyof TEvents>(
    event: TEvent,
    handle: Handle<TEvents[TEvent]>,
  ): Disposable;
  on<THandlers extends Partial<EventHandlers<TEvents>>>(
    handlers: THandlers,
  ): AggregateDisposable<THandlers>;
  on(eventOrHandlers: any, handle: any = () => {}) {
    if (typeof eventOrHandlers === 'object') {
      return this.onMultiple(eventOrHandlers);
    } else {
      return this.onSingle(eventOrHandlers, handle);
    }
  }

  private onSingle<TEvent extends keyof TEvents>(
    event: TEvent,
    handle: Handle<TEvents[TEvent]>,
  ): Disposable {
    if (!this.subscribersByEvent[event]) {
      this.subscribersByEvent[event] = {};
    }

    const id = this.currentSubscriberId;
    this.subscribersByEvent[event][id] = {
      id,
      handle,
    };

    this.currentSubscriberId += 1;

    return {
      dispose: () => {
        delete this.subscribersByEvent[event][id];
      },
    };
  }

  private onMultiple<THandlers extends Partial<EventHandlers<TEvents>>>(
    handlers: THandlers,
  ): AggregateDisposable<THandlers> {
    const disposeByEvent = Object.keys(handlers).reduce((acc, event) => {
      const handler = handlers[event];

      return handler
        ? {
            ...acc,
            [event]: this.on(event, handler),
          }
        : acc;
    }, {} as Record<keyof THandlers, Disposable>);

    return {
      ...disposeByEvent,
      dispose: () => {
        Object.values<Disposable>(disposeByEvent).forEach((disposable) => {
          disposable.dispose();
        });
      },
    };
  }

  asReadOnly(): ReadOnlyEmitter<TEvents> {
    return this;
  }
}

export function emitterOf<TEvents extends EventDefinitions>() {
  return new Emitter<TEvents>();
}
