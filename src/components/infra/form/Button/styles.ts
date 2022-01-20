import styled, { css } from 'styled-components';

interface ContainerProps {
  color?: string;
  haveIcon: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};

  ${({ haveIcon }) => {
    if (haveIcon) {
      return css`
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 60px;
        min-height: 60px;
      `;
    }

    return '';
  }};
`;
