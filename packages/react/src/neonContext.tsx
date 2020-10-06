import React from 'react';
import { Container } from 'inversify';

interface NeonContextValue {
  container: Container;
}

const NeonContext = React.createContext<NeonContextValue | null>(null);

interface NeonProviderProps {
  container: Container;
}

export const NeonProvider: React.FC<NeonProviderProps> = ({
  container,
  children,
}) => {
  const value: NeonContextValue = React.useMemo(() => {
    return {
      container,
    };
  }, [container]);

  return <NeonContext.Provider value={value}>{children}</NeonContext.Provider>;
};

export const useNeonContext = () => {
  const context = React.useContext(NeonContext);
  if (context === null) {
    throw new Error(`useNeonContext must be wrapped in NeonProvider`);
  }

  return context;
};
