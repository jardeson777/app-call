import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.background};
  width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;

  main {
    margin-top: 80px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  button {
    margin-top: 20px;
  }
`;

export const Col = styled.div`
  width: 100%;
  max-width: 420px;
  margin-top: 20px;

  img {
    width: 100%;
  }
`;
