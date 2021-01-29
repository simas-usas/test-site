import React from 'react';

import './Footer.scss';
import { URL_NAMES } from 'constants/constants';
import data from '../../data';

const Footer = () => (
  <div className="footer">
    <div className="footer-hyperlinks">
      <div className="url">{URL_NAMES.HOME}</div>
      <div className="url">{URL_NAMES.PPROJECTS}</div>
      <div className="url">{URL_NAMES.ABOUT_US}</div>
      <div className="url">{URL_NAMES.TESTIMONIALS}</div>
      <div className="url">{URL_NAMES.CONTACTS}</div>
    </div>
    <div>{data.footer}</div>
  </div>
);

export default Footer;
