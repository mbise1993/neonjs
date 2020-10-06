import React from 'react';
import { interfaces } from 'inversify';

import { Presenter } from '../presentation/presenter';
import { useInject } from './useInject';
import { View } from '../presentation/view';

export const usePresenter = <TPresenter extends Presenter>(
  id: interfaces.ServiceIdentifier<TPresenter>,
  initialize: (presenter: TPresenter) => void = () => {},
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
    presenter.initialize(view);
    initialize(presenter);
    isInitialized.current = true;
  }

  return presenter;
};
