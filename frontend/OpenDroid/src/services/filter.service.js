import React, { createContext, useContext, useState } from 'react';

// Criar contexto
const FilterContext = createContext();

// Provedor de contexto
export const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <FilterContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook para usar o contexto
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter deve ser usado dentro de um FilterProvider');
  }
  return context;
};
