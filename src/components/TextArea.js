import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <br />
      <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default TextArea;
