import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  icon?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  children,
  icon = false,
  ...rest
}) => {
  return (
    <Container haveIcon={!!icon} type="submit" color={color} {...rest}>
      {text}
      {children}
    </Container>
  );
};

export default Button;
