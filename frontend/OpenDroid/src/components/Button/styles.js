import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.bgColor || '#28a745'};
  color: ${props => props.textColor || '#ffffff'};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.hoverColor || '#218838'};
  }

  &:focus {
    outline: none;
  }
`;

export default StyledButton;
