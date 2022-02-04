import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme: { colors } }) => colors.background};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const RowVideo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;

  video {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    height: 100%;
    max-height: 300px;
  }

  .videoOff {
    background: ${({ theme }) => theme.colors.secondary};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    height: 100%;
    width: 100%;
    max-width: 500px;
    min-width: 300px;

    img {
      width: 100%;
      max-width: 240px;
    }
  }
`;
