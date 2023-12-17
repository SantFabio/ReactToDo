// Theme.js
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FAFAFA',
  colors:{
    primary:'#FFF',
    secondary: '#393A4B'
  }
};

export const darkTheme = {
  body: '#171823',
  colors:{
    primary:'#25273D',
    secondary: '#C8CBE7'
  }
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    transition: background-color 0.3s, color 0.3s;
  }
`;
