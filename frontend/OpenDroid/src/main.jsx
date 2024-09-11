import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar'; 
import GenericButton from './components/Button';
import GenericInput from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <NavBar />

      <GenericButton 
        name="Login"      
      />

      <GenericInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
