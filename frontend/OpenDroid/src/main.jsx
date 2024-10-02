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
  const [container, setContainer] = useState('Login');

  const handleContainerChange = (container) => {
    console.log('Container:', container);
    setContainer(container);
  };

  return (
    <div>
      <GenericButton 
        name="Login" 
        onClick={() => handleContainerChange('Login')} 
      />
      <GenericButton 
        name="Register" 
        onClick={() => handleContainerChange('Register')} 
      />
      <GenericButton 
        name="Redefinir" 
        onClick={() => handleContainerChange('Redefinir')} 
      />

      {container === 'Login' && <Login />}
      {container === 'Register' && <Register />}
      {container === 'Redefinir' && <Redefinir />}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);