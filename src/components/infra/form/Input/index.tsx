import React from 'react';
import theme from '../../../../styles/theme';
import { Container, InputStyled } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  colorLabel?: string;
  bgInput?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, colorLabel = theme.colors.white, bgInput, ...rest }, ref) => {
    return (
      <Container colorLabel={colorLabel}>
        <label htmlFor={rest.id}>{label}</label>
        <InputStyled ref={ref} {...rest} />
      </Container>
    );
  }
);

export { Input };
