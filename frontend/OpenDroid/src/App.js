import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register/Register'; 
import Login from './components/login/Login'; 
import ForgotPassword from './components/forgotPassword/ForgotPassword'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Corrigido aqui */}
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;