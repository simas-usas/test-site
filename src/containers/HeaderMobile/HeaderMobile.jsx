import React, { useState, useEffect } from 'react';
import { URL_NAMES } from 'constants/constants';

import MenuIcon from 'assets/menuIcon.svg';

import './HeaderMobile.scss';

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    window.addEventListener('click', (e) => {
      if (open
        && document.getElementById('side-nav')
        && !document.getElementById('side-nav').contains(e.target)
        && document.getElementById('side-nav-button')
        && !document.getElementById('side-nav-button').contains(e.target)
      ) {
        setOpen(false);
      }
    });
  }, [open]);

  return (
    <div className="header-container">
      <div className="button-container">
        <button id="side-nav-button" className={`${open ? 'hidden' : ''} open-nav-button`} type="button" onClick={() => setOpen(!open)}>
          <img src={MenuIcon} alt="Menu" />
        </button>
      </div>
      <div id="side-nav" className={`${open ? 'side-nav-open' : ''} side-nav`}>
        <a href="#">{URL_NAMES.HOME}</a>
        <a href="#">{URL_NAMES.PPROJECTS}</a>
        <a href="#">{URL_NAMES.ABOUT_US}</a>
        <a href="#">{URL_NAMES.TESTIMONIALS}</a>
        <a href="#">{URL_NAMES.CONTACTS}</a>
      </div>
    </div>
  );
};

export default HeaderMobile;
