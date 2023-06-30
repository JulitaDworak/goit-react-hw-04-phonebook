import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}

export default Filter;


Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};