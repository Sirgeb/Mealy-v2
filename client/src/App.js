import React, { Fragment } from 'react';

import Header from '../src/components/header/header.component';
import Wrapper from '../src/components/wrapper/wrapper.component';
import SuggestedMealModal from '../src/components/suggested-meal-modal/suggested-meal-modal';
import Footer from '../src/components/footer/footer.component';

import { GlobalStyle } from './global.styles';

const App = () => {

  return (
    <Fragment>
      <Header />
      <Wrapper />
      <Footer />
      <SuggestedMealModal />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
