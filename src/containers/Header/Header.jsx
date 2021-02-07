import React from 'react';

import Logo from 'assets/logo.svg';
import HeaderButton from 'components/HeaderButton';
import { URL_NAMES, PROJECT_NAMES } from 'constants/constants';

import './Header.scss';

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <div className="logo">
        <img src={Logo} alt="Test Site" />
      </div>
      <div className="header-buttons">
        <HeaderButton
          name={URL_NAMES.PPROJECTS}
          dropdown={[
            PROJECT_NAMES.LINK_1,
            PROJECT_NAMES.LINK_2,
            PROJECT_NAMES.LINK_3,
            PROJECT_NAMES.LINK_4,
            PROJECT_NAMES.LINK_5,
          ]}
        />
        <HeaderButton name={URL_NAMES.ABOUT_US} />
        <HeaderButton name={URL_NAMES.TESTIMONIALS} />
        <HeaderButton name={URL_NAMES.CONTACTS} />
      </div>
    </div>
  </div>
);

export default Header;
