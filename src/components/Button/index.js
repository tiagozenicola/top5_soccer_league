import React from 'react';
import { string, func, number } from 'prop-types';
import StyledButton from './style';


const Button = (props) => {
  const {
    sortProperty, value, name, onClick, orientation,
  } = props;

  return (
    <StyledButton onClick={() => onClick(name)}>
      {value}
      {
        sortProperty !== name ? '' : (
          orientation === 1 ? '⇧' : '⇩'
        )
      }
    </StyledButton>
  );
};

Button.propTypes = {
  sortProperty: string.isRequired,
  value: string.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
  orientation: number.isRequired,
};


export default Button;
