import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import AlertsService from '../../services/alert.service';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await AuthService.forgotPassword(email); // Chame o método apropriado no seu serviço
      AlertsService.swalAlert('success', 'Instruções para redefinir a senha foram enviadas para seu e-mail.', false, 5000);
      navigate('/login'); // Redireciona para a página de login após enviar o e-mail
    } catch (err) {
      setError(err.message || 'Erro ao enviar o e-mail. Tente novamente mais tarde.');
      AlertsService.swalAlert('error', error, false, 5000);
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="forgot-password-box">
          <h2>Esqueceu a Senha?</h2>
          <p>Digite seu e-mail para receber instruções sobre como redefinir sua senha.</p>
          <div className="input-container">
            <input
              className="forgot-password-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            {error && <span className="error">{error}</span>}
          </div>
          <input className="bt-reset-password" type="submit" value="ENVIAR" />
          <div className="login-redirect-container">
            <span className="login-redirect" onClick={() => navigate('/login')}>Voltar para o Login</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
