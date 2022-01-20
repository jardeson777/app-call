import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.h1<ContainerProps>`
  font-size: 26px;
  font-weight: bold;
  color: ${({ color }) => color};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
