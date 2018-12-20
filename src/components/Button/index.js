import React from 'react';
import { StyledButton } from './style';


const Button = (props) => {
  const {sortProperty, value, name, onClick, orientation} = props

  return <StyledButton onClick={() => onClick(name)} >
      {value}
      {
        sortProperty !== name ? '' : (  
          orientation === 1 ? '⇧' : '⇩'
        )
      }
    </StyledButton>
}


export default Button;
