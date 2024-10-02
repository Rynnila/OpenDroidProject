import React from 'react';
import StyledButton from './styles.js'; 


function GenericButton({ name, bgColor, textColor, hoverColor, onClick }) {
  return (
    <StyledButton 
      bgColor={bgColor} 
      textColor={textColor} 
      hoverColor={hoverColor} 
      onClick={onClick}
    >
     {name || 'Button'}
    </StyledButton>
  );
}


export default GenericButton;