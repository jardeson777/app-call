import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
`;
