import React from 'react';
import theme from '../../../../styles/theme';

import { Container } from './styles';

interface TitleProps {
  text: string;
  textDestaque?: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ text, color, textDestaque }) => {
  return (
    <Container color={color != null ? color : theme.colors.black}>
      {text}
      {textDestaque}
    </Container>
  );
};

export default Title;
