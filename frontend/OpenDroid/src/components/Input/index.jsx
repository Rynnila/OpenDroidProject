import React from 'react';
import StyledInput from './styles.js'; 

function GenericInput({ 
  value, 
  onChange, 
  placeholder, 
  bgColor, 
  textColor, 
  borderColor, 
  focusBorderColor, 
  focusBackgroundColor,
  padding, 
  fontSize, 
  width,
  height
}) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      bgColor={bgColor}
      textColor={textColor}
      borderColor={borderColor}
      focusBorderColor={focusBorderColor}
      focusBackgroundColor={focusBackgroundColor}
      padding={padding}
      fontSize={fontSize}
      width={width}
      height={height}
    />
  );
}

export default GenericInput;
