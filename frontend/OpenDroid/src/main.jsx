import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Register from './containers/Register/index';
import Login from './containers/Login/index';
import Redefinir from './containers/Redefinir/index';
import React, { useState } from 'react';
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
      {/* <NavBar />

      <GenericButton 
        name="Login"      
      />

      <GenericInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      /> */}

      {/* Aqui você vai chamar o container Register */}
      <Register />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
