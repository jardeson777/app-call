import styled from 'styled-components';
import { Input } from '../../../infra/form/Input';
import { Content } from '../styles';

export const ContainerForm = styled.div`
  margin-top: 20px;
`;

export const ContentModal = styled(Content)`
  width: 100%;
  max-width: 600px;

  .containerButton {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

    @media screen and (max-width: 340px) {
      flex-direction: column;
      gap: 10px;

      button {
        width: 100%;
      }
    }
  }
`;

export const InputModal = styled(Input)`
  max-width: 100%;
`;
