import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Input, SubmitButton } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia a requisição para obter todos os usuários
      const usersResponse = await axios.get('http://localhost:8080/user');
      const users = usersResponse.data;

      // Verifica se o usuário com o email e senha fornecidos existe
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setMessage(`You are logged in, ${user.name}.`); // Inclui o nome do usuário na mensagem
        setError(null);
        // Aqui você pode redirecionar o usuário ou realizar outras ações
      } else {
        setMessage(null);
        setError('User not found or incorrect password.');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Please try again later.');
      setMessage(null);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {message && <p>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
