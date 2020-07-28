import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Data from './data/dados_iniciais.json';


function App() {
  return ( < div > < Menu / >
    <
    BannerMain videoTitle = {
      Data.categorias[0].videos[0].titulo
    }
    url = {
      Data.categorias[0].videos[0].url
    }
    videoDescription = {
      "What 's front-end?"
    }
    / > <
    Footer / > <
    / div>);
  }

  export default App;