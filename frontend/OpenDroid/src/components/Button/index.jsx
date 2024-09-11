import React from 'react';
import StyledButton from './styles.js'; 

function GenericButton({ name, bgColor, textColor, hoverColor }) {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} hoverColor={hoverColor}>
      {name || 'Button'}
    </StyledButton>
  );
}

export default GenericButton;
