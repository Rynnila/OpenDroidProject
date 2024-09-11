import styled from 'styled-components';


const StyledInput = styled.input`
  background-color: ${props => props.bgColor || '#E9F0EC'};
  color: ${props => props.textColor || '#223321'};
  border: 1px solid ${props => props.borderColor || '#28a745'};
  border-radius: 4px;
  padding: ${props => props.padding || '10px'};
  font-size: ${props => props.fontSize || '15px'};
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '100%'};
  transition: border-color 0.3s, background-color 0.5s;

  &:focus {
    border-color: ${props => props.focusBorderColor || '#218838'};
    background-color: ${props => props.focusBackgroundColor || '#c9efd9'};
    outline: none;
  }
`;

export default StyledInput;
