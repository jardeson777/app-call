import React from 'react';
import { Container } from './styles';

import logo from '../../../assets/logo.png';
import Button from '../../infra/form/Button';
import Title from '../../infra/typography/Title';
import theme from '../../../styles/theme';

interface HeaderProps {
  textButton: string;
  clickButton: () => void;
  textHeader?: string;
  textHeaderDestaque?: string;
  colorButton: string;
}

const Header: React.FC<HeaderProps> = ({
  clickButton,
  textButton,
  textHeader,
  textHeaderDestaque,
  colorButton
}) => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      {textHeader && (
        <Title
          text={textHeader}
          textDestaque={textHeaderDestaque}
          color={theme.colors.white}
        />
      )}
      <Button text={textButton} onClick={clickButton} color={colorButton} />
    </Container>
  );
};

export default Header;
