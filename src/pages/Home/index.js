import React from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import PageTemplate from '../PageTemplate';
import Data from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageTemplate>
      <BannerMain
        videoTitle={Data.categorias[0].videos[0].titulo}
        url={Data.categorias[0].videos[0].url}
        videoDescription={"What 's front-end?"}
      />
    </PageTemplate>
  );
}

export default Home;
