import React from 'react';
import { interfaces } from 'inversify';

import { useNeonContext } from '../neonContext';

export const useInject = <T>(id: interfaces.ServiceIdentifier<T>): T => {
  const { container } = useNeonContext();
  const instance = React.useRef(container.get(id));

  return instance.current;
};
