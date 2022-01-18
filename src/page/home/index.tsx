import React, { useRef } from 'react';
import { useTheme } from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/infra/form/Button';
import Header from '../../components/ui/Header';
import { Input } from '../../components/infra/form/Input';
import { Col, Container, Content, Row } from './styles';
import Banner from '../../assets/banner.png';
import Title from '../../components/infra/typography/Title';

interface FormLoginProps {
  nome: string;
  codSala: string;
}

const Home: React.FC = () => {
  const { colors } = useTheme();
  const videoRef = useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit: SubmitHandler<FormLoginProps> = data => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(function (stream) {
        if (videoRef.current !== null) {
          videoRef.current.setAttribute('src', 'www');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <source ref={videoRef} type="video/mp4" />

      <Content>
        <Header />
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
                  {...register('nome')}
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
