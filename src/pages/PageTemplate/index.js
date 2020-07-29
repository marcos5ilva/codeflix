import React from 'react';
import style from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = style.main`
background-color: var(--black);
color: var(--white);
flex: 1;
padding: 50px 5%;
`;

const PageTemplate = ({ children }) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageTemplate;
