import React, { useEffect } from 'react';

function ForgotPassword() {
  useEffect(() => {
    document.title = 'Esqueci Minha Senha - OpenDroid';

    window.location.href = 'http://localhost:8080/forgot-password'; 
  }, []); 
  return null; 
}

export default ForgotPassword;
