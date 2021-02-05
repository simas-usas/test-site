import React from 'react';
import PropTypes from 'prop-types';

import './FormTextArea.scss';

const FormTextArea = ({ id, label, placeholder, value, onChange, isValid, setIsValid }) => (
  <div className={`form-textarea ${isValid ? 'textarea-margin-bottom' : ''}`}>
    <label htmlFor={id}>{label}</label>
    <textarea
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

FormTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setIsValid: PropTypes.func.isRequired,
};

export default FormTextArea;
