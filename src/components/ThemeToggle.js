// ThemeToggle.js
import React from 'react';
import Moon from './assets/images/icon-moon.svg';
import Sun from './assets/images/icon-sun.svg';


export default function ThemeToggle(props) {

    // tema escuro ou claro
const toggleTheme = () => {
    props.setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

    return (
        <div>
            <h1>TODO</h1>
            <button className='modo' onClick={toggleTheme}>
                <img src={props.theme === 'light' ? Moon : Sun} alt={props.theme === 'light' ? 'moon' : 'sun'} />
            </button>
        </div>
    );
};


