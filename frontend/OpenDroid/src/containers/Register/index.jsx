// src/containers/Register/index.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { 
  RegisterContainer, 
  RegisterForm, 
  FormGroup, 
  Label, 
  Input, 
  SubmitButton 
} from './styles';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:8080/user', formData);
      setSuccess('Registro realizado com sucesso!');
      console.log('Response:', response.data);
    } catch (err) {
      setError('Erro ao registrar. Tente novamente.');
      console.error('Error:', err);
    }
  };

  return (
    <RegisterContainer>
      <h1>Registro</h1>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <RegisterForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pass">Senha:</Label>
          <Input
            type="password"
            id="pass"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Registrar</SubmitButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
