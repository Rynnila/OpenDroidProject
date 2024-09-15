import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-sizing: border-box; /* Adicionado para garantir o box model */
`;

export const Input = styled.input`
  width: calc(100% - 1.5rem); /* Ajusta o width para acomodar o padding e border */
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Adicionado para garantir o box model */
`;

export const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  box-sizing: border-box; /* Adicionado para garantir o box model */

  &:hover {
    background-color: #218838;
  }
`;

// Estilo específico para mensagens
export const Message = styled.p`
  color: ${(props) => (props.error ? 'red' : 'green')};
  font-weight: bold;
  margin: 0.5rem 0;
`;

// Estilo específico para a mensagem de sucesso centralizada
export const SuccessMessage = styled(Message)`
  text-align: center;
`;
