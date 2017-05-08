import React from 'react';

const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div className="field-wrapper-date">
      <input {...input} type={type} min="1" placeholder={placeholder} />
      {touched && error && <label className="error-date">{error}</label>}
  </div>
);

export default renderField;
