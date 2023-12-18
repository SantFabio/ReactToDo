// Theme.js
import { createGlobalStyle } from 'styled-components';
import horizon from "../components/assets/images/horizon.png";
import corridor from "../components/assets/images/corridor.png";

export const lightTheme = {
  body: '#FAFAFA',
  background: `linear-gradient(197deg, rgba(55,16,189,0.5) 23%, rgba(164,35,149,0.5) 100%), url(${horizon}) 47% 47%/cover no-repeat`,
  colors: {
    primary: '#FFF',
    secondary: '#393A4B',
    third: '#E3E4F1',
    fourth: '#c2c3d680',
    fifth: '#494C6B',
    sixth: '#D1D2DA'
  }
};

export const darkTheme = {
  body: '#171823',
  background: `linear-gradient(162deg, rgba(55,16,189,0.5) 23%, rgba(164,35,149,0.8) 93%), url(${corridor}) 76% 50%/190% no-repeat`,
  colors: {
    primary: '#25273D',
    secondary: '#C8CBE7',
    third: '#393A4B',
    fourth: '#00000080',
    fifth: '#C8CBE7',
    sixth: '#4D5067'
  }
};

export const GlobalStyles = createGlobalStyle`
*{
  transition: background-color 0.3s, color 0.3s;
}
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
