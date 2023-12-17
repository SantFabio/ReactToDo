// Theme.js
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FAFAFA'
};

export const darkTheme = {
  body: '#171823'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;
