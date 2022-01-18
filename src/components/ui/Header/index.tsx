import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Container } from './styles';

import logo from '../../../assets/logo.png';
import Button from '../../infra/form/Button';
import ModalNovaSala from '../Modal/ModalNovaSala';

const Header: React.FC = () => {
  const { colors } = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      <ModalNovaSala isOpen={isOpenModal} closeModal={handleModal} />
      <img src={logo} alt="logo" />
      <Button text="Criar Sala" onClick={handleModal} color={colors.primary} />
    </Container>
  );
};

export default Header;
