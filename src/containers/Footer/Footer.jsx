import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_FOOTER_TEXT } from 'api/queries';

import './Footer.scss';
import { URL_NAMES } from 'constants/constants';

const Footer = () => {
  const { loading, data } = useQuery(GET_FOOTER_TEXT);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="footer">
      <div className="footer-hyperlinks">
        <div className="url">{URL_NAMES.HOME}</div>
        <div className="url">{URL_NAMES.PPROJECTS}</div>
        <div className="url">{URL_NAMES.ABOUT_US}</div>
        <div className="url">{URL_NAMES.TESTIMONIALS}</div>
        <div className="url">{URL_NAMES.CONTACTS}</div>
      </div>
      <div>{data.footerText}</div>
    </div>
  );
};

export default Footer;
