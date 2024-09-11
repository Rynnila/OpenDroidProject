import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar'; 
import GenericButton from './components/Button';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />

   <GenericButton 
      name="Login"      
    />
  </StrictMode>,
);
