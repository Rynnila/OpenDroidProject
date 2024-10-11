import React, { useEffect } from 'react';

function ForgotPassword() {
  useEffect(() => {
    window.location.href = 'http://localhost:8080/forgot-password'; // Redireciona ao carregar o componente
  }, []); // O array vazio [] garante que isso execute apenas uma vez na montagem

  return null; // Retorna null pois não precisa renderizar nada
}

export default ForgotPassword;
