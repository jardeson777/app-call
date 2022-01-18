import styled from 'styled-components';

interface ContainerProps {
  colorLabel: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    color: ${({ colorLabel }) => colorLabel};
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

export const InputStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;
