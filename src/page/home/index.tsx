import React, { useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/infra/form/Button';
import Header from '../../components/ui/Header';
import { Input } from '../../components/infra/form/Input';
import { Col, Container, Content, Row } from './styles';
import Banner from '../../assets/banner.png';
import Title from '../../components/infra/typography/Title';
import ModalNovaSala from '../../components/ui/Modal/ModalNovaSala';
import theme from '../../styles/theme';
import { useDataMeet } from '../../hook/useDataMeet';

interface FormLoginProps {
  name: string;
  codSala: string;
}

const Home: React.FC = () => {
  const { colors } = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { handleNameRoom, handleNameUser } = useDataMeet();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onSubmit: SubmitHandler<FormLoginProps> = data => {
    handleNameRoom(data.codSala);
    handleNameUser(data.name);
    navigate('/meet');
  };

  return (
    <Container>
      <Content>
        <Header
          textButton="Criar sala"
          clickButton={handleModal}
          colorButton={theme.colors.primary}
        />
        <ModalNovaSala isOpen={isOpenModal} closeModal={handleModal} />

        <main>
          <Title
            text="Comece sua videoconferência agora mesmo."
            color={colors.white}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  id="nome"
                  {...register('name')}
                  label="Digite seu nome"
                />
                <Input
                  type="text"
                  placeholder="sala0001"
                  id="codSala"
                  {...register('codSala')}
                  label="Código da sala"
                />
                <Button text="Entrar" color={colors.primary} />
              </Col>
              <Col>
                <img src={Banner} alt="banner" />
              </Col>
            </Row>
          </form>
        </main>
      </Content>
    </Container>
  );
};

export { Home };
