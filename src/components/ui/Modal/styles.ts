import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

interface ContentProps extends ContainerProps {}

export const Container = styled.section<ContainerProps>`
  background: ${({ theme }) => theme.colors.backgroundModal};
  display: flex;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div<ContentProps>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 20px;
  margin: 0 20px;
  position: relative;
  left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  transition: left 0.5s;
`;

export const ButtonCloseModal = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  right: -30px;
  top: 10px;
`;
