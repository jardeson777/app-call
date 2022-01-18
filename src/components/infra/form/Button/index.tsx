import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, ...rest }) => {
  return (
    <Container type="submit" color={color} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
