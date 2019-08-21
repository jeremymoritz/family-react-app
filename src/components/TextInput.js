import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <br />
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default TextInput;
