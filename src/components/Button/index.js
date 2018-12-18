import React, {Component} from 'react';
import { StyledButton } from './style';


const Button = (props) => {
  console.log(props)
  const {sortProperty, value, currentSort, orientation} = props

  return <StyledButton {...props} >
      {value}
      {orientation === 1 ? '⇩' : '⇧' }
    </StyledButton>
}


export default Button;
