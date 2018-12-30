import React from 'react';
import { string, func, number } from 'prop-types';
import StyledButton from './style';

const getSortIcon = (sortProperty, name, orientation) => {
  if (sortProperty !== name) { return ''; }

  return orientation === 1 ? '⇧' : '⇩';
};

const Button = (props) => {
  const {
    sortProperty, value, name, onClick, orientation,
  } = props;

  return (
    <StyledButton onClick={() => onClick(name)}>
      {value}
      {getSortIcon(sortProperty, name, orientation) }
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
