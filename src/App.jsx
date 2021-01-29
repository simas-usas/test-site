import React from 'react';

import './App.scss';
import Header from 'containers/Header/Header';
import MainParagraph from 'containers/MainParagraph/MainParagraph';
import AdditionalParagraph from 'containers/AdditionalParagraph/AdditionalParagraph';
import Footer from 'containers/Footer/Footer';

const App = () => (
  <div>
    <Header />
    <MainParagraph />
    <AdditionalParagraph />
    <Footer />
  </div>
);

export default App;
