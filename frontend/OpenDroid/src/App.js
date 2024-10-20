import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register/Register'; 
import Login from './components/login/Login'; 
import ForgotPassword from './components/forgotPassword/ForgotPassword'; 
import Forum from './components/forum/Forum';
import Documents from './components/documents/Documents';
import { FilterProvider } from './services/filter.service'; // Importando o provedor

function App() {
  return (
    <FilterProvider> {/* Envolvendo o app com o FilterProvider */}
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/documents" element={<Documents />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </Router>
    </FilterProvider>
  );
}

export default App;
