import React, { useState } from 'react';

const context = React.createContext();
const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');

  const setPages = (page) => setPage(page);

  return (
    <context.Provider value={{ setPages, page }}>{children}</context.Provider>
  );
};

export { AppProvider, context };
