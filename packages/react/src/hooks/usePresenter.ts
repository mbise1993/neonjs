import React from 'react';
import { interfaces } from 'inversify';

import { AnyObject } from '../util/types';
import { Presenter } from '../presentation/presenter';
import { useInject } from './useInject';
import { View } from '../presentation/view';

export const usePresenter = <
  TState extends AnyObject,
  TPresenter extends Presenter<TState>
>(
  id: interfaces.ServiceIdentifier<TPresenter>,
  initialState: TState,
): TPresenter => {
  const presenter = useInject(id);
  const isInitialized = React.useRef(false);
  const [, setForceUpdateKey] = React.useState(1);

  const view: View = React.useMemo(() => {
    return {
      update: () => setForceUpdateKey((previousValue) => previousValue * -1),
    };
  }, []);

  if (!isInitialized.current) {
    presenter.initialize(view, initialState);
    isInitialized.current = true;
  }

  return presenter;
};
