import React from 'react';
import Logo from '../../assets/Logo.png';
import Button from '../Button';
import './Menu.css';



const Menu = () => {
    return ( <
        nav className = "Menu" >
        <
        a href = "/" >
        <
        img className = "Logo"
        src = {
            Logo
        }
        alt = "Codeflix logo" / >
        <
        /a> <
        Button as = "a"
        href = "/"
        className = "ButtonLink" > New video < /Button> < /
        nav >
    )
}

export default Menu;