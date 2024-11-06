import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Importa a biblioteca de cookies
import axios from 'axios';
import AlertsService from '../../services/alert.service';
import './Login.css';
import logoOpendroid from '../../assets/imgs/logo-opendroid-vertical.png'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email é inválido';
    }
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      try {
        // Chama o endpoint de login da API
        const response = await axios.post('http://localhost:8080/auth/login', formData);
        
        // Verifica se a resposta foi bem-sucedida
        if (response.status === 200) {
          const token = response.data.token; // Supondo que o token esteja na resposta
          // Salva o token como um cookie
          Cookies.set('auth-token', token, { expires: 7 }); // O cookie expira em 7 dias
          AlertsService.swalAlert('success', 'Login realizado com sucesso!', false, 5000);
          navigate('/dashboard'); // Navega para a página de dashboard
        }
      } catch (error) {
        AlertsService.swalAlert('error', error.response?.data?.message || 'Erro ao realizar login.', false, 5000);
      }
    } else {
      AlertsService.swalAlert('warning', 'Erro ao realizar login.', false, 5000);
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-box">
          <img className="login-logo" src={logoOpendroid} alt="logo-opendroid" />
          <div className="input-container">
            <i className="login-icon" name="mail"></i>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-container">
            <i className="login-icon" name="key"></i>
            <input
              className="login-input"
              type="password"
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <input className="bt-login" type="submit" value="ENTRAR" />
          <div className="register-login-container">
            <span className="new">Não tem uma conta?</span>
            <span className="register-login" onClick={() => navigate('/register')}>Criar conta!</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
