import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Input, SubmitButton, SuccessMessage, Message } from './styles';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia a requisição para redefinir a senha
      const resetPasswordResponse = await axios.post('http://localhost:8080/user/reset-password', {
        email,
        currentPassword,
        newPassword
      });
      setMessage('Password reset successful.');
      setError(null);
    } catch (err) {
      console.error('Reset password failed:', err);
      setError('Reset password failed. Please check your information.');
      setMessage(null);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        {message && <SuccessMessage>{message}</SuccessMessage>}
        {error && <Message error>{error}</Message>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Reset Password</SubmitButton>
      </Form>
    </Container>
  );
};

export default ResetPassword;
