import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar'; // Certifique-se de que o caminho está correto
import GenericButton from './components/Button';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar /> {/* Renderiza o componente NavBar */}
    {/* <App /> Renderiza o componente principal da aplicação */}
    <GenericButton name={"Login"}></GenericButton>
  </StrictMode>,
);
