import { interfaces } from 'inversify';

import { useNeonContext } from '../neonContext';

export const useInject = <T>(id: interfaces.ServiceIdentifier<T>): T => {
  const { container } = useNeonContext();

  return container.get(id);
};
