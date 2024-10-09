import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import AlertsService from '../../services/alert.service';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 1,
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
    } else if (formData.password.length < 3) {
      newErrors.password = 'Senha deve ter pelo menos 3 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await AuthService.register(formData);
        if (!response) {
          AlertsService.swalAlert('warning', 'O email já está em uso.', false, 5000);
          return;
        }
        AlertsService.swalAlert('success', 'Conta criada com sucesso!', false, 5000);
        navigate('/login');
      } catch (error) {
        AlertsService.swalAlert('error', error.message, false, 5000);
      }
    } else {
      AlertsService.swalAlert('warning', 'Erro ao criar conta.', false, 5000);
    }
  };

  return (
    <div className="register-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="register-box">
          <img className="register-logo" src="assets/imgs/logo-opendroid-vertical.png" alt="logo-opendroid" />
          <div className="input-container">
            <i className="register-icon" name="mail"></i>
            <input
              className="register-input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-container">
            <i className="register-icon" name="key"></i>
            <input
              className="register-input"
              type="password"
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="input-container">
            <i className="register-icon" name="key"></i>
            <input
              className="register-input"
              type="password"
              placeholder="Confirmar senha"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          <input className="bt-register" type="submit" value="CRIAR CONTA" />
          <div className="register-login-container">
            <span className="new">Já tem uma conta?</span>
            <span className="register-login" onClick={() => navigate('/login')}>Entrar!</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
