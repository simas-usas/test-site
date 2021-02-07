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
        <div className="url"><a href="#">{URL_NAMES.HOME}</a></div>
        <div className="url"><a href="#">{URL_NAMES.PPROJECTS}</a></div>
        <div className="url"><a href="#">{URL_NAMES.ABOUT_US}</a></div>
        <div className="url"><a href="#">{URL_NAMES.TESTIMONIALS}</a></div>
        <div className="url"><a href="#">{URL_NAMES.CONTACTS}</a></div>
      </div>
      <div>{data.footerText}</div>
    </div>
  );
};

export default Footer;
