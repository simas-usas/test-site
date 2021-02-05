import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';

const FormInput = ({ id, label, placeholder, value, onChange, isValid, setIsValid }) => (
  <div className={`form-input ${isValid ? 'input-margin-bottom' : ''}`}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => {
        onChange(e.target.value);
        if (value) {
          setIsValid(true);
        }
      }}
    />
    {!isValid && <p>Field is required</p>}
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setIsValid: PropTypes.func.isRequired,
};

export default FormInput;
