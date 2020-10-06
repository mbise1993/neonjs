import React from 'react';
import { interfaces } from 'inversify';

import { useInject } from './useInject';
import { Presenter } from '../presentation/presenter';
import { View } from '../presentation/view';

export const usePresenter = <
  TState extends {},
  TPresenter extends Presenter<TState>
>(
  id: interfaces.ServiceIdentifier<TPresenter>,
  initialState: TState,
): TPresenter => {
  const presenter = useInject(id);
  const [forceUpdateKey, setForceUpdateKey] = React.useState(1);

  React.useEffect(() => {
    const view: View = {
      update: () => setForceUpdateKey(forceUpdateKey * -1),
    };

    presenter.initialize(view, initialState);
  }, []);

  return presenter;
};
