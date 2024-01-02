// Theme.js
import { createGlobalStyle } from 'styled-components';
import horizon from "../assets/images/horizon.png";
import corridor from "../assets/images/corridor.png";

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
  },
  bgp: {
    position: '50% 42%',
    size: '380%'
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
  },
  bgp: {
    position: '76% 59%',
    size: '230%'
  }
};

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 65.2%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *{
    transition: background-color 0.3s, color 0.3s;
  }
  body {
    background-color: ${(props) => props.theme.body};
    font-size: 1.8rem;
    /* position: relative; */
    @media screen and (max-width: 41.4rem) {
      *{
          font-size: 1.2rem;
      }
    }
  }
 button{
  all: unset;
 }
`;
