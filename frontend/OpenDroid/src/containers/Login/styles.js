import styled from 'styled-components';

// Container que centraliza o formulário
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 1rem; // Adicionado para evitar que o conteúdo fique muito colado às bordas
`;

// Formulário estilizado
export const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; // Máxima largura para dispositivos maiores
  box-sizing: border-box; // Inclui padding e border no cálculo da largura total
  text-align: center;

  // Adiciona espaço entre os campos e botão
  & > * {
    margin-bottom: 1rem;
  }
`;

// Estilização para inputs
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; // Inclui padding e border no cálculo da largura total

  // Ajuste de tamanho do texto para dispositivos móveis
  font-size: 1rem;
`;

// Estilização para botão de submit
export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-sizing: border-box; // Inclui padding e border no cálculo da largura total

  // Efeito de hover no botão
  &:hover {
    background-color: #218838;
  }
`;

