import React, { createContext, useState } from 'react';

export const SpitterContext = createContext();

export const SpitterProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <SpitterContext.Provider value={{ user, setUser }}>
      {children}
    </SpitterContext.Provider>
  );
};
