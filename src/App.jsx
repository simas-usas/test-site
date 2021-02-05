import React, { useState, useEffect } from 'react';

import Header from 'containers/Header';
import HeaderMobile from 'containers/HeaderMobile/HeaderMobile';
import MainParagraph from 'containers/MainParagraph';
import AdditionalParagraph from 'containers/AdditionalParagraph';
import Footer from 'containers/Footer';

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}
      <MainParagraph />
      <AdditionalParagraph />
      <Footer />
    </div>
  );
};

export default App;
