import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import './HeaderButton.scss';

const HeaderButton = ({ name, dropdown }) => (
  <div className={`menu-button ${dropdown ? 'dropdown' : ''}`}>
    {dropdown
      ? (
        <>
          <button type="button">{name}</button>
          <div className="dropdown-content">
            {map(dropdown, item => <a key={item} href="#">{item}</a>)}
          </div>
        </>
      )
      : <a href="#"><button type="button">{name}</button></a>}
  </div>
);

HeaderButton.propTypes = {
  name: PropTypes.string.isRequired,
  dropdown: PropTypes.instanceOf(Array),
};

export default HeaderButton;
