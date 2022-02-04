import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
    max-width: 220px;
    margin-bottom: 10px;
  }

  .buttonHome {
    background: none;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
