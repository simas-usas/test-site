import React from 'react';

import Logo from 'assets/logo.svg';
import { URL_NAMES, PROJECT_NAMES } from 'constants/constants';

import './Header.scss';

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <div className="logo">
        <img src={Logo} alt="Test Site" />
      </div>
      <div className="header-buttons">
        <div className="dropdown menu-button">
          <button type="button">{URL_NAMES.PPROJECTS}</button>
          <div className="dropdown-content">
            <a href="#">{PROJECT_NAMES.LINK_1}</a>
            <a href="#">{PROJECT_NAMES.LINK_2}</a>
            <a href="#">{PROJECT_NAMES.LINK_3}</a>
            <a href="#">{PROJECT_NAMES.LINK_4}</a>
            <a href="#">{PROJECT_NAMES.LINK_5}</a>
          </div>
        </div>
        <div className="menu-button"><a href="#"><button type="button">{URL_NAMES.ABOUT_US}</button></a></div>
        <div className="menu-button"><a href="#"><button type="button">{URL_NAMES.TESTIMONIALS}</button></a></div>
        <div className="menu-button"><a href="#"><button type="button">{URL_NAMES.CONTACTS}</button></a></div>
      </div>
    </div>
  </div>
);

export default Header;
