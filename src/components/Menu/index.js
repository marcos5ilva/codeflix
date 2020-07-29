import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Button from '../Button';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Codeflix logo" />
      </Link>
      <Button as={Link} to="/register/video" className="ButtonLink">
        New video
      </Button>
    </nav>
  );
};

export default Menu;
