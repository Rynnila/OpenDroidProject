import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import AlertsService from '../../services/alert.service';
import './Login.css';
import logoOpendroid from '../../assets/imgs/logo-opendroid-vertical.png';
import eyeIcon from '../../assets/imgs/icons/eye.png';
import userIcon from '../../assets/imgs/icons/user.svg';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login - OpenDroid';
  }, []);

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsLoading(true);

      try {
        const response = await axios.post('http://localhost:8080/auth/login', formData);

        if (response.status === 200) {
          const token = response.data.token;
          Cookies.set('auth-token', token, { expires: 7, secure: true, sameSite: 'Strict' });
          AlertsService.swalAlert('success', 'Login realizado com sucesso!', false, 5000);
          navigate('/dashboard');
        }
      } catch (error) {
        setIsLoading(false);
        AlertsService.swalAlert('error', error.response?.data?.message || 'Erro ao realizar login.', false, 5000);
      }
    } else {
      AlertsService.swalAlert('warning', 'Preencha todos os campos corretamente!', false, 5000);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-box">
          <img className="login-logo" src={logoOpendroid} alt="logo-opendroid" />
          <div className="input-container">
            {/* Campo de e-mail com ícone de usuário */}
            <input
              className="login-input user-icon"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-container">
            {/* Campo de senha com ícone de olho */}
            <input
              className="login-input"
              type={passwordVisible ? "text" : "password"}
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {/* Ícone de olho para mostrar/esconder a senha */}
            <img
              src={eyeIcon}
              alt="Toggle Password Visibility"
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <input className="bt-login" type="submit" value={isLoading ? "Entrando..." : "ENTRAR"} disabled={isLoading} />
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
