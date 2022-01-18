import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Title from '../../../infra/typography/Title';
import { ButtonCloseModal, Container } from '../styles';
import { ContainerForm, ContentModal, InputModal } from './styles';

import Button from '../../../infra/form/Button';
import theme from '../../../../styles/theme';

interface ModalNovaSalaProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface DataCriarNovaSala {
  user: string;
  codSala: string;
}

const ModalNovaSala: React.FC<ModalNovaSalaProps> = ({
  isOpen,
  closeModal
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<DataCriarNovaSala> = data => {
    console.log(data);
  };

  return (
    <Container isOpen={isOpen}>
      <ContentModal isOpen={isOpen}>
        <ButtonCloseModal type="button" onClick={closeModal}>
          X
        </ButtonCloseModal>
        <ContainerForm>
          <Title text="Criar videoconferência" />
        </ContainerForm>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputModal
            type="text"
            placeholder="Digite seu nome"
            label="Digite seu nome"
            colorLabel={theme.colors.secondary}
            id="user"
            {...register('user')}
          />
          <InputModal
            type="text"
            placeholder="sala0001"
            label="Código da sala"
            colorLabel={theme.colors.secondary}
            id="codSala"
            {...register('codSala')}
          />

          <div className="containerButton">
            <Button
              type="button"
              text="Voltar"
              color={theme.colors.secondary}
              onClick={closeModal}
            />

            <Button
              type="submit"
              text="Entrar"
              color={theme.colors.primary}
              onClick={closeModal}
            />
          </div>
        </form>
      </ContentModal>
    </Container>
  );
};

export default ModalNovaSala;
