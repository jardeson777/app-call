import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  button{
    border-radius: 8px;
    outline: none;
    border: none;
    height: 40px;
    padding: 0 10px;
    min-width: 120px;
    font-weight: bold;
    cursor: pointer;
  }

  input{
    border-radius: 8px;
    height: 40px;
    border: none;
    text-indent: 5px;
    outline: none;
    width: 100%;
    max-width: 300px;
  }
`;
